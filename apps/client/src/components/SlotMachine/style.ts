import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate1 = keyframes`
  0%{
    transform: rotateX(0deg);
  }
  90% {
    transform: rotateX(-1740deg);
  }
  100% {
    transform: rotateX(-1800deg);
  }
`;

export const SlotMachineAnimation = styled.div`
  width: 61.4375rem;
  height: 9.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 6.2376rem;
  color: #ffffff;
`;

export const ListWrap = styled.div`
  width: 14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 2.5rem;
  position: relative;
  bottom: 0.5rem;
`;

export const Wrap = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const List = styled.ul`
  width: 3.125rem;
  height: 3.125rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  animation-duration: 2s;
  animation-timing-function: linear;
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  &.rolling {
    animation-name: ${rotate1};
  }
`;

export const Item = styled.li`
  width: 6.25rem;
  height: 31.25rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transform-origin: 50% 50%;

  .imoji {
    display: block;
    font-size: 6.25rem;
    line-height: 6.25rem;
  }

  &:nth-child(1) {
    transform: rotateX(0) translateZ(4.6875rem);
  }
  &:nth-child(2) {
    transform: rotateX(72deg) translateZ(4.6875rem);
  }
  &:nth-child(3) {
    transform: rotateX(144deg) translateZ(4.6875rem);
  }
  &:nth-child(4) {
    transform: rotateX(216deg) translateZ(4.6875rem);
  }
  &:nth-child(5) {
    transform: rotateX(288deg) translateZ(4.6875rem);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 8.125rem;
  left: 21.25rem;
`;
