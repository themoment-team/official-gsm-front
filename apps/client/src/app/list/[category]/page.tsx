'use client';

import { ListPageCategory } from 'client/components';

import type { CategoryType } from 'types';

interface ListPageProps {
  params: { category: CategoryType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  return <ListPageCategory categoryParam={category} />;
}
