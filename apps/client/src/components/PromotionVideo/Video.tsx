import styled from '@emotion/styled';

const Video = () => (
  <VideoStyled
    poster='/images/promotion/poster.png'
    autoPlay
    loop
    muted
    playsInline
  >
    <source src='/video/promotion.webm' type='video/webm' />
    <source src='/video/promotion.mp4' type='video/mp4' />
  </VideoStyled>
);

const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Video;
