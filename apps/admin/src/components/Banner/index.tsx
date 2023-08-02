import { BannerWrapper, Video } from './style';

const Banner = () => (
  <BannerWrapper>
    <Video src='/models/school.webm' autoPlay={true} muted={true} loop />
  </BannerWrapper>
);

export default Banner;
