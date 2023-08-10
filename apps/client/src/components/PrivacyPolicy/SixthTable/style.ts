import styled from '@emotion/styled';

export const TableTitle = styled.div`
  display: grid;
  margin: 0.75rem 0 1.5rem 0;
  grid-template-columns: 33.75rem 25.5rem 12.5rem 5.75rem;
  grid-template-rows: 3.75rem;
`;

export const BigTableTitle = styled.div`
  display: grid;
  grid-template-columns: 33.75rem;
  grid-template-rows: 33rem;
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 25.5rem 12.5rem 5.75rem;
  grid-template-rows: repeat(11, 3rem);
`;

export const TabelCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
`;

export const TableTitleContent = styled(TabelCellTemplate)`
  background-color: ${({ theme }) => theme.color.gray['030']};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.6875rem;
`;

export const TableRowContent = styled(TabelCellTemplate)`
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;
