import styled from "@emotion/styled";

export const InputBox = styled.textarea<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 1.25rem;
  border: 0.0625rem solid #dcdcdc;
  background-color: #fff;
  padding: 0.875rem 0 0 1.25rem;
  resize: none;
  font-size: 0.75rem;
  color: #a4a4a4;

  ::placeholder {
    color: #a4a4a4;
  }
`;
