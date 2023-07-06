import React from 'react';

import { categoryTitle } from 'common';

import type { CategoryType } from 'types';

import { ListPageH2 } from './style';

interface ListPageTitleProps {
  category: CategoryType;
}

const ListPageTitle: React.FC<ListPageTitleProps> = ({ category }) => (
  <ListPageH2>{categoryTitle[category]}</ListPageH2>
);

export default ListPageTitle;
