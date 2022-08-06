import { Grid, Row, Col } from 'react-flexbox-grid';
import { useTheme } from 'styled-components';
import Button from 'components/Button';

export default function Home() {
  const theme = useTheme();
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
        <Button
          text="BEGIN!"
          bg={theme.colors.emerald as string}
          color={theme.colors.white as string}
        />
      </Row>
    </Grid>
  );
}
