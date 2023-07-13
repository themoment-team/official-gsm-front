import { Footer, Header, ListPageContent } from 'client/components';

import type { CategoryType } from 'types';

import type { Metadata } from 'next';

// export const dynamic = 'auto';

export const metadata: Metadata = {
  title: '공지사항',
};

interface ListPageProps {
  params: { category: CategoryType };
  searchParams: { pageNumber: string };
}

export default function ListPage({
  params: { category },
  searchParams,
}: ListPageProps) {
  return (
    <>
      <Header segment={'list'} />
      <ListPageContent category={category} searchParams={searchParams} />
      <Footer />
    </>
  );
}

// export function generateStaticParams() {
//   const categories: CategoryType[] = ['notice', 'newsletter', 'gallery'];

//   return categories.map((category) => ({ category }));
// }
