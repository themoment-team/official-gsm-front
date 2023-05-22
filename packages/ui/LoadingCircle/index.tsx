import React from "react";
import { Spinner } from "./style";
import { css } from "@emotion/react";

interface LoadingCircleProps {
  backgroundColor?: string;
}

const LoadingCircle: React.FC<LoadingCircleProps> = ({ backgroundColor }) => {
  return (
    <Spinner
      css={css`
        background-color: ${backgroundColor};
      `}
    />
  );
};

export default LoadingCircle;
