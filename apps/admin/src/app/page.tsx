'use client';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostListHeader,
  PostList,
} from 'admin/components';

const postList = [
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 2,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 3,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 4,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
];

export default function CategoryPage() {
  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
      <Banner />
      <ContentWrapper>
        <Category category='notice' />
        <PostListHeader category='notice' marginTop='3rem' />
        <PostList postList={postList} />
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
