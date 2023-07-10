import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const primaryFirst = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -115%;
  }
`;

const secondaryFirst = keyframes`
  from {
    left: 115%;
  }
  to {
    left: 0%;
  }
`;

const primaryThird = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -150%;
  }
`;

const secondaryThird = keyframes`
  from {
    left: 150%;
  }
  to {
    left: 0%;
  }
`;

const primarySecond = keyframes`
  from {
    right: 0%;
  }
  to {
    right: -110%;
  }
`;
const secondarySecond = keyframes`
  from {
    right: 110%;
  }
  to {
    right: 0%;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 20.75rem;
  overflow: hidden;
  flex-direction: column;

  @media ${({ theme }) => theme.breakPoint['600']} {
    height: 14.0625rem;
  }

  .primary.first {
    animation: ${primaryFirst} 20s linear infinite;
    width: 115vw;
  }

  .secondary.first {
    width: 115vw;
    animation: ${secondaryFirst} 20s linear infinite;
  }

  .primary.third {
    animation: ${primaryThird} 25s linear infinite;
  }

  .secondary.third {
    animation: ${secondaryThird} 25s linear infinite;
  }

  .primary.second {
    animation: ${secondarySecond} 20s linear infinite;
  }

  .secondary.second {
    animation: ${primarySecond} 20s linear infinite;
  }
`;

export const Layout = styled.div`
  height: 55.6875rem;
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

export const SlideWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 6.25rem;
  padding: 2rem 0;
  overflow-x: hidden;
`;

export const Slide2 = styled.div`
  width: 105vw;
  height: inherit;
  position: absolute;
  top: 0%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  img {
    height: auto !important;
    position: relative !important;
    margin-right: 2.6875rem;
  }
`;

export const Slide = styled.div`
  width: 150vw;
  overflow: hidden;
  height: inherit;
  position: absolute;
  left: 0%;
  top: 0%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  img {
    height: auto !important;
    position: relative !important;
    margin-right: 3.125rem;
  }
`;
