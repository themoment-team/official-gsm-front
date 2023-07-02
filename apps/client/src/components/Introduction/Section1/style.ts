import styled from '@emotion/styled';

export const MouseButton = styled.button``;

interface MouseButtonProps {
  isClicked: boolean;
}

export const ScrollContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: center;
  animation: motion 0.7s linear 0s infinite alternate;
  position: absolute;
  top: 602px;
  left: 50%;
  transform: translateX(-50%);

  @keyframes motion {
    0% {
      transform: translateY(0.625rem);
    } /* 처음 위치 */
    100% {
      transform: translateY(0);
    } /* 마지막 위치 */
  }
`;

export const SectionWrapper = styled.div<MouseButtonProps>`
  width: 100%;
  height: 200vh;
  position: relative;
  transform: ${(props) => (props.isClicked ? 'translateY(100px)' : 'black')};
`;
