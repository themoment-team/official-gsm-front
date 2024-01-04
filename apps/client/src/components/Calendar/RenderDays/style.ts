import styled from '@emotion/styled';

export const WeekBox = styled.div`
  display: flex;
  width: 57.75rem;
  height: 2.4375rem;
  gap: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Week = styled.div`
  color: ${({ theme }) => theme.color.gray['060']};
`;
