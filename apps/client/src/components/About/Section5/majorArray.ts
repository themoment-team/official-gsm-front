import type { MajorType } from 'client/types';

interface MajorArrayType {
  major: MajorType;
  name: string;
}

export const majorArray: MajorArrayType[] = [
  { major: 'SW', name: '소프트웨어 개발과' },
  { major: 'IOT', name: '스마트 IOT(Internet of Things)' },
  { major: 'AI', name: '인공 지능(AI)과' },
];
