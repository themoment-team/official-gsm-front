'use client';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from './theme';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          @media ${theme.breakPoint['600']} {
            font-size: 12px;
          }

          @media (max-width: 400px) {
            font-size: 10px;
          }
        }

        body {
          overscroll-behavior-y: none;
          overflow-x: hidden;
        }

        body,
        * {
          font-family: 'Pretendard Variable', Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
            'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          box-sizing: border-box;
        }

        button {
          border: none;
          padding: 0;
          cursor: pointer;
          background: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
