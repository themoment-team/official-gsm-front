import PostCard from '.';

import type { PostCardProps } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Listpage/PostList/PostCard',
  component: PostCard,
  parameters: {},
} as Meta<typeof PostCard>;

type Story = StoryObj<typeof PostCard>;

const args: PostCardProps = {
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
      <PostCard {...args} />
      <PostCard
        postIndex={10}
        post={{
          ...args.post,
          postTitle: '2023학년도 교과서 파일(PDF) 제공 안내',
        }}
      />
      <PostCard {...args} postIndex={100} />
    </>
  ),
};
