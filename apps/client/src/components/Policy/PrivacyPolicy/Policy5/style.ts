import styled from '@emotion/styled';

export const TableTitle = styled.div<{ isOnly?: boolean }>`
  display: grid;
  margin-top: 0.75rem;
  grid-template-columns: 20rem 25.5rem 32rem;
  grid-template-rows: 3.75rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    margin: 0;
    display: grid;
    grid-template-columns: ${({ isOnly }) => (isOnly ? '100%' : '50% 50%')};
  }

  @media (max-width: 900px) {
    margin: 0;
    display: grid;
    grid-template-columns: 100%;
  }
`;

export const TableContent = styled.div<{ isOnly?: boolean }>`
  display: grid;
  grid-template-columns: 20rem 25.5rem 32rem;

  div {
    height: 6.25rem;
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: 100% 100%;

    div {
      height: 6.25rem;
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 100%;

    div {
      height: 6.25rem;
    }
  }
`;

export const TabelCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
  white-space: pre;
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
  ${({ theme }) => theme.typo.body1};
`;
