import ListPagePostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Listpage/PostCard',
  component: ListPagePostCard,
  parameters: {},
} as Meta<typeof ListPagePostCard>;

type Story = StoryObj<typeof ListPagePostCard>;

export const Primary: Story = {
  args: {
    postIndex: 1,
    postTitle:
      '2023학년도 교과서 파일(PDF) 제공 안내 2023학년도 교과서 파일(PDF) 제공 안내 2023학년도 교과서 파일(PDF) 제공 안내',
    postWriter: '김형록',
    postDate: '2023-07-03',
  },
};
