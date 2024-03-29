import PostListHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/PostListHeader',
  component: PostListHeader,
  parameters: {},
} as Meta<typeof PostListHeader>;

type Story = StoryObj<typeof PostListHeader>;

export const Gallery: Story = {
  args: {
    category: 'gallery',
  },
};

export const Notice: Story = {
  args: {
    category: 'notice',
  },
};

export const FamilyCorrespondence: Story = {
  args: {
    category: 'newsletter',
  },
};
