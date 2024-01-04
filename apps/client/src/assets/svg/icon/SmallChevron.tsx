/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface SmallChevronProp {
  turn: 'left' | 'right';
}

const Turn = {
  left: 0,
  right: '180',
} as const;

const SmallChevron: React.FC<SmallChevronProp> = ({ turn }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='16'
    viewBox='0 0 17 16'
    fill='none'
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
  >
    <path
      d='M6 13L11 8L6 3'
      stroke='#616161'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SmallChevron;
