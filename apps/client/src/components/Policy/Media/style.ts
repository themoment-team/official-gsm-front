import styled from '@emotion/styled';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled(Column)`
  width: 77.5rem;
  gap: 5rem;
  padding: 5rem 0 7.5rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const Section = styled(Column)`
  gap: 3rem;
`;
export const Wrap = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const SubContentWrapper = styled(Column)`
  gap: 0.5rem;

  .first {
    grid-template-columns: 20rem 12.5rem 12.5rem 12.5rem 20rem;

    @media ${({ theme }) => theme.breakPoint['1440']} {
      grid-template-columns: 20% 20% 20% 20% 20%;
    }
    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 33% 33% 33%;
    }

    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 33% 33% 33%;
    }
  }
  .divide {
    grid-template-columns: 21.75rem 34.75rem;

    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 50% 50%;
    }
    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 50% 50%;
    }
  }
  .second {
    grid-template-columns: 20rem 32.5rem 25rem;

    @media ${({ theme }) => theme.breakPoint['1440']} {
      grid-template-columns: 33% 33% 33%;
    }
    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 33% 33% 33%;
    }

    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 33% 33% 33%;
    }
  }

  img {
    margin-top: 0.9375rem;
  }
`;

export const RegularSubTitle = styled.p`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 400;
`;

export const BoldSubTitle = styled(RegularSubTitle)`
  font-weight: 600;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;

export const TableTitle = styled.div`
  display: grid;
  margin-top: 0.75rem;
  grid-template-rows: 3.75rem;

  .first {
    grid-template-columns: 20rem 12.5rem 12.5rem 12.5rem 20rem;
    grid-template-rows: 3rem 3rem;

    @media ${({ theme }) => theme.breakPoint['1440']} {
      grid-template-columns: 100% 100% 100% 100% 100%;
    }
    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 100% 100% 100%;
    }

    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 100% 100% 100%;
    }
  }
  .divide {
    grid-template-columns: 21.75rem 34.75rem;
    grid-template-rows: 3rem 3rem;

    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 100% 100%;
    }
    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 100% 100%;
    }
  }
  .second {
    grid-template-columns: 20rem 32.5rem 25rem;
    grid-template-rows: 4.5rem;

    @media ${({ theme }) => theme.breakPoint['1440']} {
      grid-template-columns: 100% 100% 100%;
    }
    @media ${({ theme }) => theme.breakPoint['1024']} {
      grid-template-columns: 100% 100% 100%;
    }

    @media ${({ theme }) => theme.breakPoint['600']} {
      grid-template-columns: 100% 100% 100%;
    }
  }
`;

export const TableContent = styled.div`
  display: grid;
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
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;
