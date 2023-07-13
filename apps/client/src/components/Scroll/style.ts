import styled from '@emotion/styled';

export const ScrollContentsWrap = styled.div<{ isPromotion: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: center;
  animation: motion 0.7s linear 0s infinite alternate;
  position: absolute;
  bottom: ${({ isPromotion }) => (isPromotion ? '4.5rem' : '2.625rem')};
  left: 50%;
  color: ${({ isPromotion }) => (isPromotion ? '#ffffff' : '#424242')};

  path {
    stroke: ${({ isPromotion }) => (isPromotion ? '#ffffff' : '')};
    fill: ${({ isPromotion }) => (isPromotion ? '#ffffff' : '')};
  }

  @keyframes motion {
    0% {
      transform: translate(-50%, 0.625rem);
    } /* 처음 위치 */
    100% {
      transform: translate(-50%, 0);
    } /* 마지막 위치 */
  }
`;

export const ScrollTitle = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1875rem;
`;
