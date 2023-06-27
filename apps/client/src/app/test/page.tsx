'use client';

import { css } from '@emotion/react';

const Component = () => (
  <div>
    <h3
      css={css`
        height: 90vh;
      `}
    >
      This is a centered element
    </h3>
    {<p>Centered content</p>}
  </div>
);

export default Component;
