import styled, { createGlobalStyle } from 'styled-components';

export const Grid = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  flex: ${({ size }) => size || 1};
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
