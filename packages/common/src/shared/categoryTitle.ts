import { CategoryType } from 'types';

type CategoryTitleType = {
  [key in CategoryType]: string;
};

export const categoryTitle: CategoryTitleType = {
  notice: '📢 공지사항',
  newsletter: '📃 가정통신문',
  gallery: '📷 행사 갤러리',
} as const;
