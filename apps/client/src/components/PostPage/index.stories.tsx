import PostPage from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PostPage',
  component: PostPage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof PostPage>;

type Story = StoryObj<typeof PostPage>;

export const Primary: Story = { args: { postSeq: 1 } };
