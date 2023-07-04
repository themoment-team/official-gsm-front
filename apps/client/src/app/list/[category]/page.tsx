'use client';

import { Header, ListPageCategory } from 'client/components';

import type { CategoryType } from 'types';

interface ListPageProps {
  params: { category: CategoryType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  return (
    <>
      <Header segment={'list'} />
      <ListPageCategory categoryParam={category} />
    </>
  );
}
