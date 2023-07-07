import PostDetailHead from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PostPage/DetailHead',
  component: PostDetailHead,
} as Meta<typeof PostDetailHead>;

type Story = StoryObj<typeof PostDetailHead>;

export const Primary: Story = { args: { postSeq: 1 } };
