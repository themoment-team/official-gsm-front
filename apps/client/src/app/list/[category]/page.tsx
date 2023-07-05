'use client';

import styled from '@emotion/styled';

import { categoryQueryString } from 'common';

import {
  Footer,
  Header,
  ListPageCategory,
  ListPageTitle,
  ListPagePostCard,
} from 'client/components';

import { useGetPostList } from 'api/client';

import type { CategoryType } from 'types';

interface ListPageProps {
  params: { category: CategoryType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  const { data } = useGetPostList(categoryQueryString[category], 1);

  return (
    <>
      <Header segment={''} />
      <Content>
        <ListPageCategory categoryParam={category} />
        <ListPageTitle category={category} />
        {data?.postList?.map((post, index) => (
          <ListPagePostCard
            key={post.postSeq}
            postIndex={index + 1}
            post={post}
          />
        ))}
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
`;
