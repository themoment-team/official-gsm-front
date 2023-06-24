import type { PointColorType } from './title';

export interface BusinessCardItemType {
  title: string;
  subTitle: string;
  color: PointColorType;
}

export interface EducationDirectionType {
  icon: React.ReactNode;
  title: React.ReactNode;
  subTitle: string[];
}
