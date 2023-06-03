import styled from '@emotion/styled';

export const IMGWrapper = styled.div`
  width: 650px;
  height: 400px;
  border-radius: 10px;

  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const CarouselBar = styled.div`
  margin: 25px 0;
`;

export const Title = styled.h1`
  width: 650px;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;
  color: #050505;
`;

export const Horizon = styled.div`
  width: 650px;
  height: 1px;
  background: #eeeeee;
  margin: 16px 0;
`;

export const Content = styled.p`
  width: 650px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  word-break: keep-all;
`;

export const FileTitle = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #050505;
`;
