import styled from '@emotion/styled';

export const Layout = styled.div`
  height: 891px;
  width: 100vw;
  background-color: palegoldenrod;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .wrap {
    display: flex;
    overflow: hidden;
  }
  .wrap .rolling-list ul {
    display: flex;
  }
  .wrap .rolling-list ul li {
    width: 589px;
    height: 276px;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 0 16px;
    padding: 46px 31px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .wrap .rolling-list ul li:nth-child(1) {
    background-color: #f8e1e3;
  }
  .wrap .rolling-list ul li:nth-child(2) {
    background-color: #ffeab5;
  }
  .wrap .rolling-list ul li:nth-child(3) {
    background-color: #d3e7dc;
  }
  .wrap .rolling-list ul li:nth-child(4) {
    background-color: #a6c1e8;
  }
  .wrap .rolling-list ul li:nth-child(even) {
    margin-top: 80px;
  }
  .wrap .rolling-list ul li .image-wrap {
    padding-right: 32px;
    width: 156px;
    flex-shrink: 0;
  }
  .wrap .rolling-list ul li .image-wrap > img {
    width: 100%;
  }
  .wrap .rolling-list ul li .desc {
    font-family: 'BMJUA';
  }
  .wrap .rolling-list ul li .desc strong {
    display: block;
    font-size: 24px;
    margin-bottom: 24px;
  }
  .wrap .rolling-list ul li .desc span {
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const SectionWrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImgWrap = styled.div`
  height: 331.99969482421875px;
  width: 2926px;
  background-color: plum;
`;
export const LogoLoop = styled.div``;
export const LogoBox = styled.div``;
export const Img = styled.div``;
