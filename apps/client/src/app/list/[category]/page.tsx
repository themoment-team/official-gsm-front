import { Footer, Header, ListPageContent } from 'client/components';

import type { CategoryType } from 'types';

import type { Metadata } from 'next';

const categoryTitle: {
  [key in CategoryType]: { title: string; description: string };
} = {
  notice: {
    title: '공지사항',
    description: '광주소프트웨어마이스터고등학교 공지사항입니다.',
  },
  newsletter: {
    title: '가정통신문',
    description: '광주소프트웨어마이스터고등학교 가정통신문입니다.',
  },
  gallery: {
    title: '행사 갤러리',
    description: '광주소프트웨어마이스터고등학교 행사 갤러리입니다.',
  },
} as const;

export const generateMetadata = async ({
  params: { category },
}: ListPageProps): Promise<Metadata> => ({
  title: { absolute: categoryTitle[category].title },
  description: categoryTitle[category].description,
  openGraph: {
    title: categoryTitle[category].title,
    description: categoryTitle[category].description,
    url: `https://official.hellogsm.kr/list/${category}`,
  },
});

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
