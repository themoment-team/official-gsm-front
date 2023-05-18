import styled from "@emotion/styled";

export const ApproveItem = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1.5rem;
  font-weight: 600;
  font-size: 0.625rem;
  color: #050505;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;

  .approve {
    color: #2089ea;
  }

  .gray {
    color: #828282;
  }

  &:hover {
    background-color: #eeeeee;
    border-radius: 20px;
    transition: all ease-in-out 0.1s;
  }
`;

export const Approve = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    cursor: pointer;
  }
`;
