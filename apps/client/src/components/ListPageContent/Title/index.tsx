import React from 'react';

import { categoryTitle } from 'common';

import type { CategoryType } from 'types';

import { ListPageH2 } from './style';

interface TitleProps {
  category: CategoryType;
}

const Title: React.FC<TitleProps> = ({ category }) => (
  <ListPageH2>{categoryTitle[category]}</ListPageH2>
);

export default Title;
