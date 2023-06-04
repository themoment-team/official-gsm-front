import { css } from '@emotion/react';

interface CarouselIconProp {
  turn: 'left' | 'right';
}

const Turn = {
  left: 0,
  right: '180',
};

const CarouselIcon: React.FC<CarouselIconProp> = ({ turn }) => (
  <svg
    css={css`
      transform: rotate(${Turn[turn]}deg);
    `}
    width='9'
    height='17'
    viewBox='0 0 9 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 1L1.63683 7.81768C1.27824 8.20189 1.27824 8.79811 1.63683 9.18232L8 16'
      stroke='#9E9E9E'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

export default CarouselIcon;
