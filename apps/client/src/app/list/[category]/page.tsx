'use client';

import { Header, ListPageCategory } from 'client/components';
import type { CategoryParamsType } from 'client/types';

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  return (
    <>
      <Header segment={'list'} />
      <ListPageCategory categoryParam={category} />
    </>
  );
}
