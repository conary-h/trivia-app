import { useEffect } from 'react';
import { getQuestionsByType } from 'services/provider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from 'components/Button';

export default function Home() {
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await getQuestionsByType({ type: 'boolean', difficulty: 'hard', amount: 10 });

    console.log(res);
  };
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
