import PostDetail from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PostDetail',
  component: PostDetail,
} as Meta<typeof PostDetail>;

type Story = StoryObj<typeof PostDetail>;

export const Primary: Story = { args: { postSeq: 0 } };
