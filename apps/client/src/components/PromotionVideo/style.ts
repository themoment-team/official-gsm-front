import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const VidoeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const downAndUp = keyframes`
  0%{
    transform: translate(-50%, 0);
  }
  100%{
    transform: translate(-50%, -1.38rem);
  }
`;

export const VideoCover = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;

  & > svg {
    position: absolute;
    left: 50%;
    bottom: 9%;
    animation-name: ${downAndUp};
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;
