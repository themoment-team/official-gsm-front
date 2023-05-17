import styled from "@emotion/styled";

export const Spinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: #050505;
  border: 0.188rem solid #d9d9d9;
  border-top: 0.188rem solid #ffffff;
  border-right: 0.188rem solid #ffffff;
  box-sizing: border-box;

  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
