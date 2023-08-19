import styled from '@emotion/styled';

export const TableTitle = styled.div`
  display: grid;
  margin-top: 0.75rem;
  grid-template-columns: 9rem 14.75rem 20rem 17.5rem 8rem 8.25rem;
  grid-template-rows: 4rem;

  @media (max-width: 1400px) {
    display: grid;
    margin: 0;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows: 4rem;
  }

  @media (max-width: 900px) {
    display: grid;
    margin: 0;
    grid-template-columns: 100%;
    grid-template-rows: 4rem;
  }
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 9rem 14.75rem 20rem 17.5rem 8rem 8.25rem;

  div {
    height: 4.25rem;
  }

  @media (max-width: 1400px) {
    display: grid;
    grid-template-columns: 100% 100% 100%;

    div {
      height: 4.25rem;
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 100%;

    div {
      height: 4.25rem;
    }
  }
`;

export const TabelCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  color: ${({ theme }) => theme.color.gray['070']};
  box-sizing: border-box;
`;

export const TableTitleContent = styled(TabelCellTemplate)`
  background-color: ${({ theme }) => theme.color.gray['030']};
  ${({ theme }) => theme.typo.h5}
  font-weight: 600;
`;

export const TableRowContent = styled(TabelCellTemplate)`
  ${({ theme }) => theme.typo.body1};
  font-weight: 400;
`;
