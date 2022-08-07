import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    transition: all 0.50s linear;
    margin: 0;
  }
  `;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const SubTitle = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
`;

type TextProps = {
  $fontSize?: string;
  $fontStyle?: string;
  $fontWeight?: string;
};

export const Text = styled.span<TextProps>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-style: ${({ $fontStyle }) => $fontStyle};
  font-weight: ${({ $fontWeight }) => $fontWeight};
`;

export const Wrapper = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 500px;
  align-items: center;
`;
