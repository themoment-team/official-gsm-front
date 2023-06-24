import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

const primaryRight = keyframes`
  from {
    right: 0%;
  }
  to {
    right: -100%;
  }
`;
const secondaryRight = keyframes`
  from {
    right: 100%;
  }
  to {
    right: 0%;
  }
`;

export const Layout = styled.div`
  height: 891px;
  width: 100vw;
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

export const ScrollWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100px;
  padding: 2rem 0;
  overflow-x: hidden;
`;

export const ScrollWrap2 = styled.div`
  position: relative;
  width: 100vw;
  height: 100px;
  padding: 2rem 0;
  overflow-x: hidden;
  .primary.second {
    animation: ${secondaryRight} 20s linear infinite;
  }
  .secondary.second {
    animation: ${primaryRight} 20s linear infinite;
  }
`;
export const Scroll2 = styled.div`
  width: 100vw;
  height: inherit;
  position: absolute;
  top: 0%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
  img {
    height: auto !important;
    position: relative !important;
    margin-right: 43px;
  }
`;

export const Scroll = styled.div`
  height: inherit;
  width: 115vw;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
  img {
    height: auto !important;
    position: relative !important;
    margin-right: 50px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 332px;
  overflow: hidden;
  flex-direction: column;

  .primary.first {
    animation: ${primary} 20s linear infinite;
  }

  .primary.third {
    animation: ${primary} 25s linear infinite;
  }

  .secondary.first {
    animation: ${secondary} 20s linear infinite;
  }

  .secondary.third {
    animation: ${secondary} 25s linear infinite;
  }
`;
