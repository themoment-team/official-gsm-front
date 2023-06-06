'use client';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostListHeader,
  PostList,
} from 'admin/components';

import { useGetPostList } from 'api/client';

export default function Home() {
  // example
  const { data } = useGetPostList('NOTICE', 0);

  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
      <Banner />
      <ContentWrapper>
        <Category category='notice' />
        <PostListHeader category='notice' marginTop='3rem' />
        <PostList postList={data?.postList ?? []} />
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
