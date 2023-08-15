import styled from '@emotion/styled';

export const PolicyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PolicyTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  padding-bottom: 0.25rem;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
  display: flex;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.8125rem;

  span {
    display: block;
  }
`;

export const FifthTableTitle = styled.div`
  display: grid;
  margin: 0.75rem 0 1.5rem 0;
  grid-template-columns: 11.25rem 40rem 26.25rem;
  grid-template-rows: 3.75rem;
`;

export const FifthTableContent = styled.div`
  display: grid;
  grid-template-columns: 11.25rem 40rem 26.25rem;
  grid-template-rows: 3rem 3rem 3rem;
`;

export const FifthTableCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
`;

export const FifthTableTitleContent = styled(FifthTableCellTemplate)`
  background-color: ${({ theme }) => theme.color.gray['030']};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6875rem;
`;

export const FifthTableRowContent = styled(FifthTableCellTemplate)`
  color: ${({ theme }) => theme.color.gray['070']};
  ${({ theme }) => theme.typo.body1};
  font-weight: 400;
`;

export const SixthTableTitle = styled.div`
  display: grid;
  margin: 0.75rem 0 1.5rem 0;
  grid-template-columns: 33.75rem 25.5rem 12.5rem 5.75rem;
  grid-template-rows: 3.75rem;
`;

export const BigSixthTableTitle = styled.div`
  display: grid;
  grid-template-columns: 33.75rem;
  grid-template-rows: 33rem;
`;

export const SixthTableContent = styled.div`
  display: grid;
  grid-template-columns: 25.5rem 12.5rem 5.75rem;
  grid-template-rows: repeat(11, 3rem);
`;

export const SixthTableCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
`;

export const SixthTableTitleContent = styled(SixthTableCellTemplate)`
  background-color: ${({ theme }) => theme.color.gray['030']};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6875rem;
`;

export const SixthTableRowContent = styled(SixthTableCellTemplate)`
  color: ${({ theme }) => theme.color.gray['070']};
  ${({ theme }) => theme.typo.body1};
  font-weight: 400;
`;
