import React from 'react';

interface PlusIconProps {
  color: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ color }) => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.94872 10.9615C4.94872 11.5351 5.41365 12 5.98718 12C6.56071 12 7.02564 11.5351 7.02564 10.9615V7.02564H10.9615C11.5351 7.02564 12 6.56071 12 5.98718C12 5.41365 11.5351 4.94872 10.9615 4.94872H7.02564V1.03846C7.02564 0.464935 6.56071 0 5.98718 0C5.41365 0 4.94872 0.464935 4.94872 1.03846V4.94872H1.03846C0.464935 4.94872 0 5.41365 0 5.98718C0 6.56071 0.464935 7.02564 1.03846 7.02564H4.94872V10.9615Z'
      fill={color}
    />
  </svg>
);

export default PlusIcon;
