import AssembledPost from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PostPage/AssembledPost',
  component: AssembledPost,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof AssembledPost>;

type Story = StoryObj<typeof AssembledPost>;

export const Primary: Story = { args: { postSeq: 351 } };
