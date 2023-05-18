import React from "react";
import { Video } from "./style";
import { css } from "@emotion/react";

interface AuthModelProps {
  modelUrl: string;
  marginTopREM?: number;
}

const AuthModel: React.FC<AuthModelProps> = ({ modelUrl, marginTopREM }) => {
  return (
    <Video
      src={modelUrl}
      autoPlay={true}
      muted={true}
      loop
      css={css`
        margin-top: ${marginTopREM && `${marginTopREM}rem`};
      `}
    />
  );
};

export default AuthModel;
