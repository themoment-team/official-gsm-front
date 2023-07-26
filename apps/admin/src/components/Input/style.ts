import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  height: 2.75rem;
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputValueResetBtn = styled.button`
  height: 1rem;
  position: absolute;
  right: 1rem;
  opacity: 0;
  transition: ease-in-out 0.3s;
`;

export const InputBox = styled.input<{ borderRadius?: string }>`
  ${({ theme }) => theme.typo.caption};
  width: 100%;
  height: 100%;
  border: 0.0625rem solid #dcdcdc;
  border-radius: ${({ borderRadius }) => borderRadius ?? '1.25rem'};
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 3.125rem 0 1.25rem;
  color: ${({ theme }) => theme.color.gray['080']};
  transition: ease-in-out 0.3s;
  outline: none;

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    color: #505050;
    border: 0.0625rem solid #050505;
  }

  &:focus + ${InputValueResetBtn} {
    opacity: 1;
    cursor: pointer;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
