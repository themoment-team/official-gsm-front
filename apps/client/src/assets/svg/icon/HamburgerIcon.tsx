import { useTheme } from '@emotion/react';

const HamburgerIcon = ({
  isBackgroundWhite,
}: {
  isBackgroundWhite: boolean;
}) => {
  const theme = useTheme();

  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Menu / Hamburger_MD'>
        <path
          id='Vector'
          d='M8.33333 28.3333H31.6667M8.33333 20H31.6667M8.33333 11.6667H31.6667'
          stroke={
            isBackgroundWhite ? theme.color.gray['090'] : theme.color.white
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