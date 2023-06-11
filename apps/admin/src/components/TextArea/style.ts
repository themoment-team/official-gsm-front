import styled from '@emotion/styled';

export const TextAreaBox = styled.textarea`
  border: 0.0625rem solid #dcdcdc;
  outline: none;
  background-color: #fff;
  padding: 0.875rem 1.25rem 0.875rem 1.25rem;
  font-size: 0.75rem;
  color: #a4a4a4;
  resize: none;
  transition: ease-in-out 0.3s;

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    border: 0.0625rem solid #050505;
    color: #505050;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
