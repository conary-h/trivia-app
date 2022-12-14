import { useNavigate } from 'react-router-dom';
import { Grid, Row } from 'react-flexbox-grid';
import { useTheme } from 'styled-components';
import Button from 'components/Button';

import { Title, SubTitle, Wrapper } from 'styles/globalStyles';

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBeginButtonClick = () => {
    navigate('/game');
  };

  return (
    <Wrapper fluid as={Grid} style={{ justifyContent: 'space-between' }}>
      <Row>
        <Title>
          Welcome to the <br />
          Trivia Challenge!
        </Title>
      </Row>
      <Row>
        <SubTitle>
          You will be presented <br /> with 10 True or False questions
        </SubTitle>
      </Row>
      <Row>
        <SubTitle>Can you score 100%?</SubTitle>
      </Row>

      <Row center="xs">
        <Button
          onClick={handleBeginButtonClick}
          text="BEGIN!"
          bg={theme.colors.emerald as string}
          color={theme.colors.white as string}
        />
      </Row>
    </Wrapper>
  );
}
