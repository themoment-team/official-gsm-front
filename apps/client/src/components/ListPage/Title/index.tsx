import React from 'react';

import { ListPageH2 } from './style';

interface ListPageTitleProps {
  children: React.ReactNode;
}

const ListPageTitle: React.FC<ListPageTitleProps> = ({ children }) => (
  <ListPageH2>{children}</ListPageH2>
);

export default ListPageTitle;
