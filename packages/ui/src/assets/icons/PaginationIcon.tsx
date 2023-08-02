/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';

interface PaginationIconProp {
  turn: 'left' | 'right';
  disabled: boolean;
}

const Turn = {
  left: 0,
  right: '180',
} as const;

const PaginationIcon: React.FC<PaginationIconProp> = ({ turn, disabled }) => {
  const theme = useTheme();

  return (
    <svg
      css={css`
        transform: rotate(${Turn[turn]}deg);
      `}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.5 4.16663L6.66667 9.99996L12.5 15.8333'
        stroke={theme.color.gray[disabled ? '060' : '080']}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PaginationIcon;
