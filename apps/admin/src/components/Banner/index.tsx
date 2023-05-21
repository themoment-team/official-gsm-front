import React from "react";
import { BannerWrapper, Video } from "./style";

interface BannerProps {
  modelUrl: string;
}

const Banner: React.FC<BannerProps> = ({ modelUrl }) => {
  return (
    <BannerWrapper>
      <Video src={modelUrl} autoPlay={true} muted={true} loop />
    </BannerWrapper>
  );
};

export default Banner;
