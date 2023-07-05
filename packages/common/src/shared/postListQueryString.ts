import { CategoryQueryStringType, CategoryType } from 'types';

type PostListQueryStringType = {
  [key in CategoryType]: CategoryQueryStringType;
};

export const categoryQueryString: PostListQueryStringType = {
  notice: 'NOTICE',
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;
