import type { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import React from 'react';

import { css } from '@emotion/react';

import { Video } from './style';

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
}) => (
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

export default AuthModel;
