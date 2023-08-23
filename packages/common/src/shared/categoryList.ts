import { CategoryType } from 'types';
import { categoryQueryString } from './categoryQueryString';

export const categoryList = Object.keys(categoryQueryString) as CategoryType[];
