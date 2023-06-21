import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const primary = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`;

const secondary = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
`;

export const Layout = styled.div`
  height: 891px;
  width: 100vw;
  background-color: palegoldenrod;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  .scroll-parent {
    position: relative;
    width: 100vw;
    height: 20rem;
    padding: 2rem 0;
    overflow-x: hidden;
  }

  .scroll-element {
    width: inherit;
    height: inherit;
    position: absolute;
    left: 0%;
    top: 0%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .scroll-element img {
    width: 15%;
  }

  .primary {
    animation: ${primary} 15s linear infinite;
  }

  .secondary {
    animation: ${secondary} 15s linear infinite;
  }
`;
