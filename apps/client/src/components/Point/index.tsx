import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface PointProps {
  size: string;
  position: 'top' | 'bottom';
  color: string;
}

const Point: React.FC<PointProps> = ({ size, position, color }) => (
  <PointStyle
    className={color}
    css={css`
      width: ${size};
      height: ${size};
      background-color: ${color};
      ${position === 'top' ? 'top: 0' : 'bottom: 10px'}
    `}
  />
);

export default Point;

const PointStyle = styled.div`
  border-radius: 50%;
  position: absolute;
  right: -30px;
`;