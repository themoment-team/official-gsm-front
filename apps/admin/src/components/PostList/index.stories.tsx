import PostList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/PostList',
  component: PostList,
  parameters: {},
} as Meta<typeof PostList>;

type Story = StoryObj<typeof PostList>;

const postList = [
  {
    postSeq: 1,
    postTitle: 'Title 1',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    contentPreview: '1.코로나-19에 따른 학습 공백 최소화를',
  },
  {
    postSeq: 2,
    postTitle: 'Title 2',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    contentPreview: '',
  },
  {
    postSeq: 3,
    postTitle: 'Title 3',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    contentPreview: '1.코로나-19에 따른 학습 공백 최소화를 위하여 한국교교',
  },
  {
    postSeq: 4,
    postTitle: 'Title 4',
    postWriter: '선생님',
    createdAt: '2023-05-03T19:47:01.250197',
    contentPreview:
      '1.코로나-19에 따른 학습 공백 최소화를 위하여 한국교교 안녕하세요 안녕하세요 안녕하세요',
  },
];

export const Primary: Story = {
  args: {
    postList: postList,
  },
};
