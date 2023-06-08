import { css } from '@emotion/react';

interface PaginationIconProp {
  turn: 'left' | 'right';
}

const Turn = {
  left: 0,
  right: '180',
};

const PaginationIcon: React.FC<PaginationIconProp> = ({ turn }) => (
  <svg
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
    width='10'
    height='18'
    viewBox='0 0 10 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9 1.5L1.77817 8.27046C1.35676 8.66554 1.35676 9.33446 1.77817 9.72954L9 16.5'
      stroke='#050505'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

export default PaginationIcon;
