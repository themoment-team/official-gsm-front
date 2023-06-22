import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// 회전하는 횟수를 지정합니다 (360deg -> 1회전)
// 최종 아이템에 도달하면 속도가 느려집니다
const rotate1 = keyframes`
  0%{
    transform: rotateX(0deg);
  }
  90%{
    transform: rotateX(-2170deg);
  }
  92%{
    transform: rotateX(-2168deg);
  }
  94%{
    transform: rotateX(-2166deg);
  }
  96%{
    transform: rotateX(-2164deg);
  }
  98%{
    transform: rotateX(-2162deg);
  }
  100%{
    transform: rotateX(-2160deg);
  }
`;

export const SlotMachineAnimation = styled.div`
  width: 61.4375rem;
  display: flex;
  align-items: start;
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
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;

export const ListIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
`;

export const Wrap = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const List = styled.ul`
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
  height: 6.25rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transform-origin: 50% 50%;

  // 아이템 개수가 5개 이므로 108deg 씩 더합니다
  // z 속성은 아이템간의 간격을 결정한다고 보시면 됩니다

  &:nth-of-type(1) {
    transform: rotateX(0) translateZ(220px);
  }
  &:nth-of-type(2) {
    transform: rotateX(108deg) translateZ(220px);
  }
  &:nth-of-type(3) {
    transform: rotateX(216deg) translateZ(220px);
  }
  &:nth-of-type(4) {
    transform: rotateX(324deg) translateZ(220px);
  }
  &:nth-of-type(5) {
    transform: rotateX(432deg) translateZ(220px);
  }
`;
