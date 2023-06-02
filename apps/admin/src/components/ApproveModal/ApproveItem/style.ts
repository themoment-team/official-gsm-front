import styled from '@emotion/styled';

export const ApproveItem = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1.5rem;
  font-weight: 600;
  font-size: 0.688rem;
  color: #050505;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .teacher {
    width: 4.5rem;
  }

  .date,
  .refuse {
    color: #828282;
  }

  .approve {
    color: #2089ea;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #eeeeee;
    border-radius: 1.25rem;
    transition: all ease-in-out 0.1s;
  }
`;

export const Approve = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    font-size: 0.688rem;
  }
`;
