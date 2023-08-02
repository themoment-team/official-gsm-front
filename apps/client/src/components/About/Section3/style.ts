import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  height: 54.0625rem;
  background-color: ${({ theme }) => theme.color.background};

  @media ${({ theme }) => theme.breakPoint['1440']} {
    height: 75.625rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    height: 86.0625rem;
    padding: 0 3.75rem;
  }
`;

export const EducationDirectionLayout = styled.div`
  display: flex;
  gap: 2.375rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
