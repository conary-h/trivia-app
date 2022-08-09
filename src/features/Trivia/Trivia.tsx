import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { Grid, Row } from 'react-flexbox-grid';
import { isEmpty } from 'lodash';

import Card from 'components/Card';
import Button from 'components/Button';
import Skeleton from 'components/Skeleton';

import { gameDifficulty, questionTypes, AMOUNT_OF_QUESTIONS } from 'utils/constants';
import { getQuestionsByType } from '../Trivia/Trivia.thunks';
import { setAnswer, setQuestionIndex } from './Trivia.slice';
import { QuestionsCount, ButtonsRow } from './Trivia.styles';
import { Title, Wrapper, Text } from 'styles/globalStyles';

export default function Trivia() {
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, status } = useSelector(
    (state: RootState) => state.trivia
  );
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const fetchQuestions = async () => {
    await dispatch(
      getQuestionsByType({
        type: questionTypes.BOOLEAN,
        difficulty: gameDifficulty.HARD,
        amount: AMOUNT_OF_QUESTIONS
      })
    );
  };

  const handleSubmit = (answer: boolean) => {
    const nextIndex = currentQuestionIndex + 1;

    dispatch(setAnswer({ answer }));
    dispatch(setQuestionIndex(nextIndex));

    if (nextIndex === AMOUNT_OF_QUESTIONS) {
      navigate('/results');
    }
  };

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {status === 'loading' && (
        <Row>
          <Skeleton variant="card" />
        </Row>
      )}
      {!isEmpty(questions) && (
        <Wrapper fluid as={Grid}>
          <Row>
            <Title>{currentQuestion?.category}</Title>
          </Row>
          <Row>
            <Card style={{ marginTop: '7rem', marginBottom: '4rem' }}>
              <Text fontSize="2rem" fontWeight="500">
                {currentQuestion?.question}
              </Text>
            </Card>
          </Row>
          <ButtonsRow as={Row}>
            <Button
              text="TRUE"
              color={theme.colors.emerald as string}
              border={`1px dashed ${theme.colors.text}`}
              onClick={() => handleSubmit(true)}
            />
            <Button
              text="FALSE"
              color={theme.colors.warning as string}
              border={`1px dashed ${theme.colors.text}`}
              onClick={() => handleSubmit(false)}
            />
          </ButtonsRow>
          <Row>
            <QuestionsCount>{`${currentQuestionIndex + 1} /${totalQuestions}`}</QuestionsCount>
          </Row>
        </Wrapper>
      )}
    </>
  );
}
