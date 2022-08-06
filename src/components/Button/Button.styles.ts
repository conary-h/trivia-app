import styled from 'styled-components';

type ButtonWrapperProps = {
  readonly bg: string;
  readonly color: string;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  background-color: ${({ bg, theme }) => bg || theme.colors.text};
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  color: ${({ color, theme }) => color || theme.colors.text};
`;
