import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IMGWrapper = styled.div`
  border-radius: 10px;

  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const CarouselBar = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  justify-content: center;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 37px;
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: #9e9e9e;
  border-radius: 50%;
  margin: 0 3px;
`;
