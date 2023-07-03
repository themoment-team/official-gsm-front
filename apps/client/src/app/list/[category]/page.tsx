'use client';

import { ListPageCategory } from 'client/components';
import type { CategoryParamsType } from 'client/types';

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  return <ListPageCategory categoryParam={category} />;
}
