import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    margin: 3px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 50px;
  height: 30px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.emerald};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 2.2rem;
      height: 2.2rem;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
