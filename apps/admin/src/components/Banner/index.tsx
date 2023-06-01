import { BannerWrapper, Video } from './style';

const Banner = () => (
    <BannerWrapper>
      <Video src='/models/school.WebM' autoPlay={true} muted={true} loop />
    </BannerWrapper>
  );

export default Banner;
