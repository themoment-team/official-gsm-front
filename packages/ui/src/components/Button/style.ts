import styled from '@emotion/styled';

export const CustomButton = styled.button`
  width: 21.4375rem;
  height: 3.0625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #050505;
  border-radius: 1.25rem;
  font-size: 0.938rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  :hover {
    background: #a4a4a4;
    transition: background 0.2s ease-in-out;
  }
  :disabled {
    background: #dcdcdc;
    pointer-events: none;
  }
`;
