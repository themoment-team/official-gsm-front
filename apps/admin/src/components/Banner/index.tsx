import { BannerWrapper, Video } from "./style";

interface BannerProps {
  modelUrl: string;
}

const Banner = ({ modelUrl }: BannerProps) => {
  return (
    <BannerWrapper>
      <Video src={modelUrl} autoPlay={true} muted={true} loop />
    </BannerWrapper>
  );
};

export default Banner;
