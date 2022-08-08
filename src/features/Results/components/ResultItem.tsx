import { useTheme } from 'styled-components';
import { Text } from 'styles/globalStyles';
import { ItemWrapper } from '../Results.styles';

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
      <Text fontSize="2.2rem" fontWeight="bold" color={color as string}>
        {question}
      </Text>
    </ItemWrapper>
  );
}
