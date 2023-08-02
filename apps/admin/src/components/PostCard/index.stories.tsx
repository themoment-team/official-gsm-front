import PostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/PostCard',
  component: PostCard,
  parameters: {},
} as Meta<typeof PostCard>;

type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {
  args: {
    post: {
      postSeq: 1,
      postTitle: '2023학년도 교과서 파일(PDF) 제공 안내',
      contentPreview:
        '1.코로나-19에 따른 학습 공백 최소화를 위하여 한국교교 안녕하세요 안녕하세요 안녕하세요',
      postWriter: '정문정',
      createdAt: '2023-05-02',
    },
  },
};
