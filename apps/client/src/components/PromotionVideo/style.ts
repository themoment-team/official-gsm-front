import styled from '@emotion/styled';

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
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

export const VideoCover = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;
`;
