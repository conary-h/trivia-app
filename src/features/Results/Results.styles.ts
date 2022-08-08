import styled from 'styled-components';
import { Text } from 'styles/globalStyles';

type StatusIconProps = {
  readonly color: string;
};

export const ItemWrapper = styled.div`
  margin-bottom: 2rem;
  margin-bottom: 2rem;
`;

export const ListWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

export const StatusIcon = styled.div<StatusIconProps>`
  width: 2.5rem;
  height: 2.5rem;
`;

export const QuestionText = styled(Text)`
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
