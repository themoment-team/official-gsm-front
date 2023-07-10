import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  width: 100%;
  height: 79.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1335px) {
    height: 127.4375rem;
  }
`;

export const SectionContentWrapper = styled.div`
  width: 77.5rem;
  height: 57.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1335px) {
    width: 51.5rem;
    height: 104.9375rem;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 30rem;
    height: 101.125rem;
  }
`;
