import styled from '@emotion/styled';

export const Location = styled.div`
  width: 100vw;
  height: 80vh;
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
  background: ${({ theme }) => theme.color.gray['050']};
`;

export const MapContentBox = styled.div`
  width: 75.1875rem;
  height: 10.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddressAndContactBox = styled.div`
  width: 26rem;
  height: 10.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OntheWayBox = styled.div`
  width: 35.0625rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin-right: 2.3125rem;
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
`;

export const Subway = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.color.primary.navy};
  border-radius: 100%;
`;

export const Divide = styled.div`
  width: 0.25rem;
  height: 10rem;
  background: ${({ theme }) => theme.color.gray['030']};
`;
