import { useTheme } from 'styled-components';
import { ItemWrapper, StatusIcon, QuestionText } from '../Results.styles';
import { Check, Minus } from 'react-feather';
import { Col, Row } from 'react-flexbox-grid';

type Question = {
  question: string;
  correct_answer: boolean;
  picked_answer: boolean;
};

type ResultItemProps = {
  item: Question;
};

export default function ResultItem({ item }: ResultItemProps) {
  const theme = useTheme();
  const { question, correct_answer, picked_answer } = item;
  const isCorrectAnswer = correct_answer === picked_answer;
  const color = isCorrectAnswer ? theme.colors.emerald : theme.colors.warning;

  return (
    <ItemWrapper>
      <Row middle="xs">
        <Col xs={1} style={{ textAlign: 'center' }}>
          {isCorrectAnswer ? (
            <StatusIcon as={Check} color={color as string} />
          ) : (
            <StatusIcon as={Minus} color={color as string} />
          )}
        </Col>

        <Col xs={11}>
          <QuestionText fontWeight="bold">{question}</QuestionText>
        </Col>
      </Row>
    </ItemWrapper>
  );
}
