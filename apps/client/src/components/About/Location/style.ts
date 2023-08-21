import styled from '@emotion/styled';

export const Location = styled.div`
  width: 100vw;
  height: 916px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 940px;
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
  width: 77.5rem;
  height: 0.0625rem;
  margin-top: 1.75rem;
  background: ${({ theme }) => theme.color.gray['050']};
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

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
    height: 11.5rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    flex-direction: column;
    height: 29.125rem;
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
    flex-direction: row;
    width: calc(100vw - 10.5rem);
  }
`;

export const OnTheWayBox = styled.div`
  width: 35.0625rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin-right: 2.3125rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    flex-direction: column;
    height: 11.5rem;
    margin: 0;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: calc(100vw - 10.5rem);
    flex-direction: row;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    width: 13.125rem;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    width: 13.125rem;
    align-items: center;
    text-align: center;
    height: 8.8125rem;
  }
`;

export const Subway = styled.div`
  display: flex;
  gap: 1.25rem;

  @media ${({ theme }) => theme.breakPoint['600']} {
    flex-direction: column;
    align-items: center;
    width: 13.125rem;
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
