import React, { DetailedHTMLProps, VideoHTMLAttributes } from "react";
import { Video } from "./style";
import { css } from "@emotion/react";

interface AuthModelProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  modelUrl: string;
  marginTopREM?: number;
}

const AuthModel: React.FC<AuthModelProps> = ({
  modelUrl,
  marginTopREM,
  ...attributes
}) => {
  return (
    <Video
      src={modelUrl}
      autoPlay={true}
      muted={true}
      loop={true}
      {...attributes}
      css={css`
        margin-top: ${marginTopREM && `${marginTopREM}rem`};
      `}
    />
  );
};

export default AuthModel;
