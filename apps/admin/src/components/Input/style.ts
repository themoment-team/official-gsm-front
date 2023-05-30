import styled from "@emotion/styled";

export const InputBox = styled.input`
  width: 21.4375rem;
  height: 2.75rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #dcdcdc;
  background-color: #fff;
  padding: 0 20px 0 20px;
  font-size: 0.75rem;
  color: #a4a4a4;
  transition: ease-in-out 0.3s;
  outline: none;

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    color: #505050;
    border: 0.0625rem solid #050505;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
