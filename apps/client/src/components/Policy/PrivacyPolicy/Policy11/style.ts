import styled from '@emotion/styled';

export const FifthTableTitle = styled.div`
  display: grid;
  margin: 1.25rem 0 1.25rem 0;
  grid-template-columns: 11.25rem 40rem 26.25rem;
  grid-template-rows: 3.75rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    margin: 0;
    margin-bottom: 20px;
    grid-template-columns: 14.6% 51.5% 33.8%;
    grid-template-rows: 3.75rem;
  }

  @media (max-width: 900px) {
    display: grid;
    margin: 0;
    grid-template-columns: 100%;
    grid-template-rows: 3.75rem;
  }
`;

export const FifthTableContent = styled.div`
  display: grid;
  grid-template-columns: 11.25rem 40rem 26.25rem;
  grid-template-rows: 3rem 3rem 3rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: 100% 352.7% 231.5%;
    grid-template-rows: 3rem 3rem 3rem;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 3rem 3rem 3rem;
  }
`;

export const FifthTableCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
  white-space: pre;
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
  margin: 0.75rem 0 0 0;
  grid-template-columns: 33.75rem 25.5rem 12.5rem 5.75rem;
  grid-template-rows: 3.75rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    margin-bottom: 0.75rem 0 0 0;
    grid-template-columns: 42% 33% 16.7% 8.6%;
    grid-template-rows: 3.75rem;
  }

  @media (max-width: 900px) {
    display: grid;
    margin-bottom: 0.75rem 0 0 0;
    grid-template-columns: 27% 73%;
    grid-template-rows: 3.75rem;
  }
`;

export const BigSixthTableTitle = styled.div`
  display: grid;
  grid-template-columns: 33.75rem;
  grid-template-rows: 33rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 33rem;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 33rem;
  }
`;

export const SixthTableContent = styled.div`
  display: grid;
  grid-template-columns: 25.5rem 12.5rem 5.75rem;
  grid-template-rows: repeat(11, 3rem);

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: 100% 50.6% 26.1%;
    grid-template-rows: repeat(11, 3rem);
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 270%;
    grid-template-rows: repeat(11, 3rem);
  }
`;

export const SixthTableCellTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color.gray['080']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['050']};
  box-sizing: border-box;
  white-space: pre;
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

export const SixthResTableTitle = styled.div`
  display: grid;
  margin: 0.75rem 0 0 0;
  grid-template-columns: 65.4% 34.6%;
  grid-template-rows: 3.75rem;
`;

export const SixthResTableContent = styled.div`
  display: grid;
  grid-template-columns: 100% 52.9%;
  grid-template-rows: repeat(11, 3rem);
`;
