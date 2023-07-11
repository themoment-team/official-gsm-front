import styled from '@emotion/styled';

export const VidoeWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    height: 43.75rem;
    display: flex;
    justify-content: center;
  }
`;

export const Video = styled.video`
  width: 100%;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: auto;
    height: 100%;
  }
`;

export const VideoCover = styled.div`
  width: 100%;
  height: calc(56.25vw);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    height: 43.75rem;
  }
`;
