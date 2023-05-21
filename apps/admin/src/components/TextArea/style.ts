import styled from "@emotion/styled";

export const TextAreaBox = styled.textarea`
  border-radius: 1.25rem;
  border: 0.0625rem solid #dcdcdc;
  box-sizing: border-box;
  background-color: #fff;
  padding: 14px 0 0 20px;
  font-size: 0.75rem;
  color: #a4a4a4;
  resize: none;
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
