import styled from '@emotion/styled';

export const VidoeWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
`;

export const Video = styled.video`
  width: 100%;
`;

export const VideoCover = styled.div`
  width: 100%;
  height: calc(56.25vw);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;
`;
