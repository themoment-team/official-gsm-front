'use client';

import { useTheme } from '@emotion/react';

const HamburgerIcon = ({
  isAbovePromotionVideo,
}: {
  isAbovePromotionVideo: boolean;
}) => {
  const theme = useTheme();

  return (
    <svg
      width='2.5rem'
      height='2.5rem'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Menu / Hamburger_MD'>
        <path
          id='Vector'
          d='M8.33333 28.3333H31.6667M8.33333 20H31.6667M8.33333 11.6667H31.6667'
          stroke={
            isAbovePromotionVideo ? theme.color.white : theme.color.gray['090']
          }
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
