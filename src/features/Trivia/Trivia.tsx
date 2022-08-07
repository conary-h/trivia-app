import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { Grid, Row } from 'react-flexbox-grid';
import { getQuestionsByType } from '../Trivia/Trivia.thunks';
import { gameDifficulty, questionTypes } from 'utils/constants';
import { Title, Wrapper } from 'styles/globalStyles';

export default function Trivia() {
  const dispatch: AppDispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector((state: RootState) => state.trivia);

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

  return (
    <Wrapper fluid as={Grid}>
      <Row>
        <Title>{questions[currentQuestionIndex]?.category}</Title>
      </Row>
    </Wrapper>
  );
}
