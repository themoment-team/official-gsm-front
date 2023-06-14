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
  width: 983px;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 99.802px;
  color: #ffffff;
`;

export const ListWrap = styled.div`
  width: 224px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 40px;
  position: relative;
  bottom: 8px;
`;

export const Wrap = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const List = styled.ul`
  width: 50px;
  height: 50px;
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
  width: 100px;
  height: 500px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transform-origin: 50% 50%;

  .imoji {
    display: block;
    font-size: 100px;
    line-height: 100px;
  }

  &:nth-child(1) {
    transform: rotateX(0) translateZ(75px);
  }
  &:nth-child(2) {
    transform: rotateX(72deg) translateZ(75px);
  }
  &:nth-child(3) {
    transform: rotateX(144deg) translateZ(75px);
  }
  &:nth-child(4) {
    transform: rotateX(216deg) translateZ(75px);
  }
  &:nth-child(5) {
    transform: rotateX(288deg) translateZ(75px);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 130px;
  left: 340px;
`;
