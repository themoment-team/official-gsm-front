import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 6.6875rem;

  padding: 11.25rem 0;
`;

export const BusinessLayout = styled.div`
  display: flex;
  gap: 6.875rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    gap: 3rem;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    flex-direction: column;
  }
`;
