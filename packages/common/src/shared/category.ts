import { CategoryType, CategoryQueryStringType } from 'types';

type CategoryTitleType = {
  [key in CategoryType]: string;
};

export const categoryTitle: CategoryTitleType = {
  notice: '📢 공지사항',
  newsletter: '📃 가정통신문',
  gallery: '📷 행사 갤러리',
} as const;

type CategoryQueryString = {
  [key in CategoryType]: CategoryQueryStringType;
};

export const categoryQueryString: CategoryQueryString = {
  notice: 'NOTICE',
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;

export const categoryList = Object.keys(categoryTitle) as CategoryType[];
