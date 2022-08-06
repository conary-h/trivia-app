import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { getQuestionsByType } from '../Trivia/Trivia.thunks';
import { gameDifficulty, questionTypes } from 'utils/constants';

export default function Trivia() {
  const dispatch: AppDispatch = useDispatch();

  const fetchQuestions = async () => {
    await dispatch(
      getQuestionsByType({
        type: questionTypes.BOOLEAN,
        difficulty: gameDifficulty.HARD,
        amount: 10
      })
    );
  };

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Trivia</div>;
}
