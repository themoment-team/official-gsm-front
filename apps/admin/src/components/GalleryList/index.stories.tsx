import GalleryList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GalleryList',
  component: GalleryList,
  parameters: {},
} as Meta<typeof GalleryList>;

type Story = StoryObj<typeof GalleryList>;

const postList = [
  {
    postSeq: 1,
    postTitle: 'Test 1',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview: '2023년 광주소프트웨어마이스터고등학교',
  },
  {
    postSeq: 2,
    postTitle: 'Test 2',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview: '',
  },
  {
    postSeq: 3,
    postTitle: 'Test 3',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview:
      '2023년 광주소프트웨어마이스터고등학교 안녕하세요 안녕하세요 안녕하세요',
  },
  {
    postSeq: 4,
    postTitle: 'Test 4',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview: '2023년 광주소프트웨어마이스터고등학교 안녕하세요 안녕하세',
  },
  {
    postSeq: 5,
    postTitle: 'Test 5',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview: '2023년 광주소프트웨어마이스터고등학교 안녕하세요',
  },
  {
    postSeq: 6,
    postTitle: 'Test 6',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    thumbnailUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
    contentPreview:
      '2023년 광주소프트웨어마이스터고등학교 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 ',
  },
];

export const Primary: Story = {
  args: {
    postList: postList,
  },
};
