'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostList,
  PostListHeader,
  GalleryList,
} from 'admin/components';
import type { CategoryType } from 'admin/types';

import type { PostCategoryType } from 'api/client';
import { useGetPostList } from 'api/client';

interface CategoryParamsType {
  [key: string]: PostCategoryType;
}

const categoryParams: CategoryParamsType = {
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
};

const categoryParamsArray = ['', 'newsletter', 'gallery'];

interface ListPageProps {
  params: { category: CategoryType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  if (!categoryParamsArray.includes(category)) {
    redirect('/');
  }

  const { data } = useGetPostList(categoryParams[category], 0);

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
