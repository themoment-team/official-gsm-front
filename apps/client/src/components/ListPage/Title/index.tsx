import React from 'react';

import type { CategoryType } from 'types';

import { ListPageH2 } from './style';

const categoryTitle = {
  notice: '📢 공지사항',
  newsletter: '📃 가정통신문',
  gallery: '📷 행사 갤러리',
};

interface ListPageTitleProps {
  category: CategoryType;
}

const ListPageTitle: React.FC<ListPageTitleProps> = ({ category }) => (
  <ListPageH2>{categoryTitle[category]}</ListPageH2>
);

export default ListPageTitle;
