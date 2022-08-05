import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from 'components/Button';
import { getQuestionsByType } from '../Trivia/Trivia.thunks';
import { gameDifficulty, questionTypes } from 'utils/constants';

export default function Home() {
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

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>Welcome to the Trivia Challenge!</h1>
        </Col>
        <Col xs={12}>
          <h2>You will be presented with 10 True or False questions</h2>
        </Col>
        <Col xs={12}>
          <h2>Can you score 100%?</h2>
        </Col>
      </Row>
      <Row>
        <Button text="BEGIN!" />
      </Row>
    </Grid>
  );
}
