import styled from '@emotion/styled';

export const Location = styled.div`
  width: 100vw;
  height: 57.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakPoint['600']} {
    height: 70.875rem;
  }
`;

export const ContentBox = styled.div`
  width: 77.5rem;
  height: 44.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
    height: 45rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    height: 41.25rem;
    justify-content: space-evenly;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.125rem;
`;

export const Line = styled.div`
  height: 0.0625rem;
  margin-top: 1.75rem;
  background: ${({ theme }) => theme.color.gray['050']};
  @media ${({ theme }) => theme.breakPoint['600']} {
    margin-bottom: 0.625rem;
  }
`;

export const Map = styled.div`
  width: 77.5rem;
  height: 25rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const MapContentBox = styled.div`
  width: 75.1875rem;
  height: 10.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
  background: pink;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 7.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
    height: 11.5rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 5rem);
    margin-top: 6.75rem;
    height: 43.75rem;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const AddressAndContactBox = styled.div`
  width: 26rem;
  height: 10.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: 44.75rem;
    height: 11.5rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 6.25rem);
    flex-direction: row;
    gap: 1.875rem;
  }
`;

export const OnTheWayBox = styled.div`
  width: 35.0625rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin-right: 2.3125rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    gap: 0.625rem;
    flex-direction: column;
    height: 11.5rem;
    margin: 0;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 6.25rem);
    flex-direction: row;
    gap: 1.875rem;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 6.25rem);
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 700;
`;

export const Desc = styled.div`
  color: ${({ theme }) => theme.color.gray['080']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 6.25rem);
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    flex-direction: column;
  }
`;

export const DescBox = styled.div`
  height: 3.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Walk = styled.div`
  display: flex;
  gap: 1.25rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    flex-direction: column;
    width: calc(100vw - 6.25rem);
    align-items: center;
    text-align: center;
    height: 8.8125rem;
  }
`;

export const Subway = styled.div`
  display: flex;
  gap: 1.25rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 6.25rem);
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 8.8125rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.color.primary.navy};
  border-radius: 100%;
  path {
    stroke: ${({ theme }) => theme.color.white};
  }
`;

export const Divide = styled.div`
  width: 0.25rem;
  height: 10rem;
  background: ${({ theme }) => theme.color.gray['030']};

  @media ${({ theme }) => theme.breakPoint['1024']} {
    display: none;
  }
`;
