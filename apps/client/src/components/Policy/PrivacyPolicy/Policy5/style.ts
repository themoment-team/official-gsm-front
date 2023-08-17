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

export const BulletItemWrap = styled.div`
  padding-left: 1.25rem;

  > p {
    padding-left: 1.625rem;
  }

  div {
    padding-bottom: 0.5rem;
  }
`;

export const MiniTitle = styled(SubTitle)<{ isPadding?: boolean }>`
  color: ${({ theme }) => theme.color.gray['070']};
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-bottom: ${({ isPadding }) => isPadding && '0.5rem'};
  > span {
    padding-right: 0.5rem;
  }
`;

export const TableTitle = styled.div`
  display: grid;
  margin-top: 0.75rem;
  grid-template-columns: 20rem 25.5rem 32rem;
  grid-template-rows: 3.75rem;
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 20rem 25.5rem 32rem;

  div {
    height: 6.25rem;
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