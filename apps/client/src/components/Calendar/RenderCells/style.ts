import styled from '@emotion/styled';

export const DayBox = styled.div`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
`;

export const RowDay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};

  > div {
    width: 8.25rem;
    height: 8.75rem;
    box-sizing: border-box;
    border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
    border-right: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
    background-color: ${({ theme }) => theme.color.white};
  }
`;

export const DayBoxContainer = styled.div`
  width: 57.75rem;
  height: 43.6875rem;
  position: absolute;
  background-color: plum;
  border-radius: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
`;

export const Day = styled.div<{ remainDays: boolean; isToday: boolean }>`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme, remainDays, isToday }) =>
    remainDays
      ? theme.color.gray['060']
      : isToday
      ? theme.color.primary.sky
      : theme.color.gray['070']};

  font-weight: ${({ isToday }) => (isToday ? 700 : 400)};
  margin: 0.75rem;
`;
