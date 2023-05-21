import styled from "@emotion/styled";

export const InputBox = styled.input`
  border-radius: 1.25rem;
  border: 0.0625rem solid #dcdcdc;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: 20px;
  font-size: 0.75rem;
  color: #a4a4a4;
  transition: ease-in-out 0.3s;

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    color: #505050;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
