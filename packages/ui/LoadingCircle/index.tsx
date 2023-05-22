import React from "react";
import { Spinner } from "./style";
import { css } from "@emotion/react";

interface LoadingCircleProps {
  bgColor?: string;
}

const LoadingCircle: React.FC<LoadingCircleProps> = ({ bgColor }) => {
  return (
    <Spinner
      css={css`
        background-color: ${bgColor};
      `}
    />
  );
};

export default LoadingCircle;
