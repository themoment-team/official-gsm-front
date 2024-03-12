/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface DoubleChevronProp {
  turn: 'left' | 'right';
}

const Turn = {
  left: 0,
  right: '180',
} as const;

const DoubleChevron: React.FC<DoubleChevronProp> = ({ turn }) => (
  <svg
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='16'
    viewBox='0 0 17 16'
    fill='none'
  >
    <path
      d='M4 13L9 8L4 3M8 13L13 8L8 3'
      stroke='#9E9E9E'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DoubleChevron;
