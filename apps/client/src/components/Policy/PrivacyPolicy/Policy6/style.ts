import styled from '@emotion/styled';

export const TableTitle = styled.div`
  display: grid;
  margin-top: 0.75rem;
  grid-template-columns: 25.75rem 26rem 25.75rem;
  grid-template-rows: 3.75rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    margin: 0;
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  @media (max-width: 900px) {
    display: grid;
    margin: 0;
    grid-template-columns: 100%;
  }
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 25.75rem 26rem 25.75rem;
  grid-template-rows: 7.8125rem 3rem 6.5rem 3rem 3rem 3rem 3rem 3rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: 100% 100% 100%;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7.8125rem 3rem 6.5rem 3rem 3rem 3rem 3rem 3rem;
  }
`;

export const TabelCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  color: ${({ theme }) => theme.color.gray['080']};
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
  ${({ theme }) => theme.typo.body1};
  font-weight: 400;
`;
