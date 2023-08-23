import { CategoryQueryStringType, CategoryType } from 'types';

type CategoryQueryString = {
  [key in CategoryType]: CategoryQueryStringType;
};

export const categoryQueryString: CategoryQueryString = {
  notice: 'NOTICE',
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;
