import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// 회전하는 횟수를 지정합니다 (360deg -> 1회전)
// 최종 아이템에 도달하면 속도가 느려집니다
const rotate1 = keyframes`
  0%{
    transform: rotateX(0deg);
  }
  30%{
    transform: rotateX(-1000deg);
  }
  40%{
    transform: rotateX(-1400deg);
  }
  50%{
    transform: rotateX(-1800deg);
  }
  60%{
    transform: rotateX(-2000deg);
  }
  70%{
    transform: rotateX(-2100deg);
  }
  80%{
    transform: rotateX(-2160deg);
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
  width: 61.875rem;
  display: flex;
  align-items: start;
  font-style: normal;
  font-weight: 700;
  font-size: 6.2376rem;
  color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.breakPoint[1024]} {
    align-items: center;
    flex-direction: column;
    width: 21.4375rem;
    span {
      font-size: 3.6088rem;
    }
    svg {
      width: 12.125rem;
      height: 2.4838rem;
      position: absolute;
      top: 4.375rem;
      right: 3.125rem;
    }
    .second {
      position: absolute;
      top: 14.375rem;
    }
  }
`;

export const ListWrap = styled.div`
  width: 224px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 2.5rem;
  position: relative;
  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: 9.375rem;
  }
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;
export const Icon = styled.div`
  background-color: 'pink';
  position: absolute;
  top: 6.25rem;
  left: 19.375rem;
`;

export const ListIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
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
  animation-duration: 6s;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  height: 6.25rem;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  list-style: none;
  transform-origin: 50% 50%;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    font-size: 5rem;
  }

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
