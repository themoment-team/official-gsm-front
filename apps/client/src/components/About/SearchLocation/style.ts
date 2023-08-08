import styled from '@emotion/styled';

export const SearchLocation = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentBox = styled.div`
  width: 1240px;
  height: 716px;
  background-color: pink;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
`;
export const Line = styled.div`
  width: 1240px;
  height: 1px;
  background: ${({ theme }) => theme.color.gray['050']};
`;
export const Map = styled.div`
  width: 1240px;
  height: 400px;
  flex-shrink: 0;
  background-color: lightgray;
`;
export const MapContentBox = styled.div`
  width: 1203px;
  height: 162px;
  flex-shrink: 0;
  background-color: lightgray;
`;
export const AddressAndConatctBox = styled.div`
  background-color: gray;
`;
export const OntheWayBox = styled.div`
  background-color: gray;
`;
export const Address = styled.div``;
export const Contact = styled.div``;
export const Walk = styled.div``;
export const Subway = styled.div``;
