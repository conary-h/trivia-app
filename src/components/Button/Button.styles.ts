import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  border: 0;
  outline: 0;
  color: ${({ color }) => color || '#000'};
`;
