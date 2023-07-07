import ListPagePostCard from '.';

import type { ListPagePostCardProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Listpage/PostCard',
  component: ListPagePostCard,
  parameters: {},
} as Meta<typeof ListPagePostCard>;

type Story = StoryObj<typeof ListPagePostCard>;

const args: ListPagePostCardProps = {
  postIndex: 1,
  post: {
    postSeq: 1,
    postTitle:
      '2023학년도 교과서 파일(PDF) 제공 안내 2023학년도 교과서 파일(PDF) 제공 안내 2023학년도 교과서 파일(PDF) 제공 안내',
    postWriter: '김형록',
    createdAt: '2023-07-03',
  },
};

export const Primary: Story = {
  args: { ...args },
};

export const ThreeDigitIndex: Story = {
  args: {
    ...args,
    postIndex: 100,
  },
};

export const MultipleCard: Story = {
  render: () => (
    <>
      <ListPagePostCard {...args} />
      <ListPagePostCard
        postIndex={10}
        post={{
          ...args.post,
          postTitle: '2023학년도 교과서 파일(PDF) 제공 안내',
        }}
      />
      <ListPagePostCard {...args} postIndex={100} />
    </>
  ),
};
