import ListPagePostCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Listpage/PostCard',
  component: ListPagePostCard,
  parameters: {},
} as Meta<typeof ListPagePostCard>;

type Story = StoryObj<typeof ListPagePostCard>;

export const Primary: Story = {
  args: {},
};
