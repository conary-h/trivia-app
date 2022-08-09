import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Row } from 'react-flexbox-grid';
import { useTheme } from 'styled-components';

import Button from 'components/Button';
import ResultList from './components/ResultList';

import { RootState, AppDispatch } from 'store';
import { resetGameState } from 'features/Trivia/Trivia.slice';
import { Wrapper, Title } from 'styles/globalStyles';
import { isEmpty } from 'lodash';

export default function Results() {
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, totalQuestionsCount, correctAnswersCount } = useSelector(
    (state: RootState) => state.trivia
  );

  const handlePlayAgainClick = () => {
    dispatch(resetGameState());
    navigate('/');
  };

  useEffect(() => {
    if (isEmpty(questions)) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper fluid as={Grid}>
      <Row>
        <Title>
          You scored <br />
          {`${correctAnswersCount} /${totalQuestionsCount}`}
        </Title>
      </Row>

      <Row start="xs">
        <ResultList items={questions} />
      </Row>

      <Row center="xs">
        <Button
          onClick={handlePlayAgainClick}
          text="PLAY AGAIN?"
          color={theme.colors.text as string}
        />
      </Row>
    </Wrapper>
  );
}
