import type { PointColorType, PointPositionType } from './point';

export interface TitleType {
  children: React.ReactNode;

  point: {
    pointSize: string;
    pointPosition: PointPositionType;
    pointColor: PointColorType;
  };
}
