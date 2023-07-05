'use client';

import styled from '@emotion/styled';

import {
  Footer,
  Header,
  ListPageCategory,
  ListPageTitle,
  ListPagePostCard,
} from 'client/components';
import type { CategoryParamsType } from 'client/types';

import type { PostCategoryType } from 'api/client';
import { useGetPostList } from 'api/client';

interface PostListQueryStringType {
  [key: string]: PostCategoryType;
}

const postListQueryString: PostListQueryStringType = {
  notice: 'NOTICE',
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  const { data } = useGetPostList(postListQueryString[category], 1);

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
