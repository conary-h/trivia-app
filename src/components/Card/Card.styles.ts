import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 8rem 2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
`;
