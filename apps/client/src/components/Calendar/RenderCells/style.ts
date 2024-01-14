import styled from '@emotion/styled';

export const GridDay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  .hi {
  }

  > div {
    width: 8.25rem;
    height: 8.75rem;
    box-sizing: border-box;
    border-right: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  }
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

export const Container = styled.div`
  overflow: hidden;
  width: 922.5px;
  height: auto;
  min-height: 516px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.color.gray['050']};
  /*border-bottom: 1px solid ${({ theme }) => theme.color.gray['050']}; */
`;

export const RowBox = styled.div`
  background-color: pink;
  border-bottom: none;
`;
