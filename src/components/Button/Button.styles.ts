import styled from 'styled-components';

type ButtonWrapperProps = {
  readonly $bg: string;
  readonly $color: string;
  readonly $border: string;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  background-color: ${({ $bg, theme }) => $bg || theme.colors.body};
  color: ${({ $color, theme }) => $color || theme.colors.text};
  border: ${({ $border }) => $border || 'none'};
  padding: 1.5rem 3.2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.6rem;
  margin: 0.4rem 0.2rem;
  cursor: pointer;
`;
