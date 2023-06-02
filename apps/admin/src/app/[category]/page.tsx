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

interface ListPageProps {
  params: { category: CategoryType };
}

const categoryParamsArray = ['', 'newsletter', 'gallery'];

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
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl: null,
    fileIsExist: true,
  },
];

const galleryList = [
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: 'Test',
    postWriter: 'Tester',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://files.porsche.com/filestore/image/multimedia/none/911-tus-cab-modelimage-sideshot/thumbwhite/0be56286-3e8c-11ea-80c8-005056bbdc38;sZ;twebp/porsche-thumbwhite.webp',
    fileIsExist: true,
  },
];

export default function ListPage({ params: { category } }: ListPageProps) {
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
          <GalleryList postList={galleryList} />
        ) : (
          <PostList postList={postList} />
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
