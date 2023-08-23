import { notFound, redirect } from 'next/navigation';

import { Footer, Header, ListPageContent } from 'client/components';

import { postUrl } from 'api/client';

import { categoryList, categoryQueryString } from 'common';

import type { CategoryType, PostListType } from 'types';

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

export const generateMetadata = ({
  params: { category },
}: ListPageProps): Metadata => {
  if (!categoryList.includes(category)) {
    return notFound();
  }

  return {
    title: { absolute: categoryTitle[category].title },
    description: categoryTitle[category].description,
    openGraph: {
      title: categoryTitle[category].title,
      description: categoryTitle[category].description,
      url: `https://official.hellogsm.kr/list/${category}`,
    },
  };
};

interface ListPageProps {
  params: { category: CategoryType };
  searchParams: { pageNumber: string };
}

export default async function ListPage({
  params: { category },
  searchParams,
}: ListPageProps) {
  /**falsy 값을 1로 대체 (ex. '', 0, undefined) */
  const pageNumber = Number(searchParams.pageNumber || 1);
  const postList = await getPostList(category, pageNumber);

  if (postList.postList.length < 1) {
    return redirect(`/list/${category}`);
  }

  return (
    <>
      <Header segment={'list'} />
      <ListPageContent
        category={category}
        postList={postList}
        pageNumber={pageNumber}
      />
      <Footer />
    </>
  );
}

async function getPostList(
  category: CategoryType,
  pageNumber: number
): Promise<PostListType> {
  const PAGE_SIZE = 12;

  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/client${postUrl.postList(
        categoryQueryString[category],
        pageNumber,
        PAGE_SIZE
      )}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const data: PostListType = await res.json();

    return data;
  } catch (e) {
    return notFound();
  }
}
