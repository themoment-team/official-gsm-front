import styled from '@emotion/styled';

export const Calendar = styled.div`
  width: 988px;
  height: 878px;
  /* background-color: ${({ theme: { color } }) => color.white}; */
  background-color: pink;
  border-radius: 20px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.h3};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeekBox = styled.div`
  display: flex;
  gap: 90px;
`;

export const Week = styled.div`
  color: ${({ theme }) => theme.color.gray['060']};
`;

export const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 132px 132px 132px 132px 132px;
`;

export const Day = styled.div<{ isToday: boolean }>`
  ${({ theme }) => theme.typo.body1};
  font-weight: ${({ isToday }) => (isToday ? 700 : 400)};
  color: ${({ theme, isToday }) =>
    isToday ? theme.color.primary.sky : theme.color.gray['070']};
  border: 1px solid ${({ theme }) => theme.color.gray['050']};
`;

export const CalendarBox = styled.div`
  width: 924px;
  height: 699px;
  border-radius: 16px;
  border: 1px solid var(--gray050, #e0e0e0);
  background: #fff;
`;
