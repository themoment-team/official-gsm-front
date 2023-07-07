import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const leftFadeInOut = keyframes`
  0% {
    left: -6.25rem;
  }
  100% {
    opacity: 1;
    left: 0;
  }
  `;

const rightFadeInOut = keyframes`
  0% {
    right: -6.25rem;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;

const FadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.375rem;
  position: absolute;
  top: 15.1875rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary.navy};
  position: relative;
  display: flex;
  gap: 0.625rem;
  align-items: flex-end;
  opacity: 0;
`;

export const FirstTitle = styled(Title)`
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.primary.navy}; /* 웹킷 기반 브라우저 (Chrome, Safari) */
  color: transparent;
  font-family: initial;
  font-size: 3.8578rem;
  animation: ${leftFadeInOut} 1.5s ease-in-out forwards;

  @media (max-width: 952px) {
    font-size: 44.29px;
    line-height: 52.85px;
  }
`;

export const SecondTitle = styled(Title)`
  text-align: right;
  font-size: 3.2975rem;
  justify-content: end;
  animation: ${rightFadeInOut} 1.5s ease-in-out forwards;
  animation-delay: 1s;

  @media (max-width: 952px) {
    font-size: 37.86px;
    line-height: 45.18px;
  }
`;

export const ThirdTitle = styled(Title)`
  font-size: 3.5019rem;
  animation: ${leftFadeInOut} 1.5s ease-in-out forwards;
  animation-delay: 2s;

  @media (max-width: 952px) {
    font-size: 47.98px;
    line-height: 47.98px;
  }
`;

export const Point = styled.div`
  width: 0.7063rem;
  height: 0.7063rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.primary.lime};
`;

export const EnglishSchoolName = styled.p`
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  position: relative;
  animation: ${FadeInOut} 1.5s ease-in-out forwards;
  animation-delay: 3s;
  opacity: 0;

  @media (max-width: 952px) {
    font-size: 17.22px;
    line-height: 20.55px;
  }
`;
