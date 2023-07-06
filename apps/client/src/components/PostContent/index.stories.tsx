import PostContent from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PostContent',
  component: PostContent,
} as Meta<typeof PostContent>;

type Story = StoryObj<typeof PostContent>;

export const Primary: Story = {
  args: {
    postSeq: 1,
  },
};
