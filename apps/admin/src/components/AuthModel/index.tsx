import React, { DetailedHTMLProps, VideoHTMLAttributes } from "react";
import { Video } from "./style";
import { css } from "@emotion/react";

interface AuthModelProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  modelUrl: string;
  marginTop?: string;
}

const AuthModel: React.FC<AuthModelProps> = ({
  modelUrl,
  marginTop,
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
        margin-top: ${marginTop};
      `}
    />
  );
};

export default AuthModel;
