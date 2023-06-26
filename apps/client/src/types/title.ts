import type { PointColorType, PointPositionType } from './point';

export interface TitleProps {
  children: React.ReactNode;
  className: string;

  point: {
    pointSize?: string;
    pointPosition?: PointPositionType;
    pointColor?: PointColorType;
  };
}
