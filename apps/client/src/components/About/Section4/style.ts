import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  width: 100%;
  height: 79.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1335px) {
    height: 2039px;
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
    width: 824px;
    height: 1679px;
  }

  @media (${({ theme }) => theme.breakPoint[600]}) {
    width: 480px;
    height: 1618px;
  }
`;
