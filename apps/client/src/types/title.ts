export type PointPositionType = 'top' | 'bottom';

export type PointColorType = 'navy' | 'sky' | 'lime';

export interface TitleProps {
  children: React.ReactNode;
  className: string;

  point: {
    pointSize?: string;
    pointPosition?: PointPositionType;
    pointColor?: string;
  };
}
