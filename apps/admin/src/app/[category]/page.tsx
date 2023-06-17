'use client';

import { useState } from 'react';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostList,
  PostListHeader,
  GalleryList,
  PaginationController,
} from 'admin/components';

import { useGetPostList } from 'api/client';

const categoryParamsArray = ['', 'newsletter', 'gallery'] as const;

const categoryQueryString = {
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;

type CategoryParamsType = keyof typeof categoryQueryString;

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const { data } = useGetPostList(categoryQueryString[category], pageNumber);

  if (!categoryParamsArray.includes(category)) {
    redirect('/');
  }

  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
      <Banner />
      <ContentWrapper>
        <Category category={category} />
        <PostListHeader category={category} marginTop='3rem' />
        {category === 'gallery' ? (
          <GalleryList postList={data?.postList ?? []} />
        ) : (
          <PostList postList={data?.postList ?? []} />
        )}
        {(data?.totalPages ?? 0) > 1 && (
          <PaginationController
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={data?.totalPages ?? 0}
          />
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
`;

// it's not working in client component

// export function generateStaticParams() {
//   return [{ category: "newsletter" }, { category: "gallery" }];
// }

// export const dynamicParams = false;
