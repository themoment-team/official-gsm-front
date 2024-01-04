import styled from '@emotion/styled';

export const Calendar = styled.div`
  width: 988px;
  height: auto;
  min-height: 878px;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarBox = styled.div`
  width: 57.75rem;
  height: 43.6875rem;
  border-radius: 1rem;
  background-color: ${({ theme: { color } }) => color.white};
`;
