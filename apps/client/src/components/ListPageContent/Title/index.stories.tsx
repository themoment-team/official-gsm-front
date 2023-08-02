import ListPageTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ListPage/Title',
  component: ListPageTitle,
  parameters: {},
} as Meta<typeof ListPageTitle>;

type Story = StoryObj<typeof ListPageTitle>;

export const Notice: Story = {
  args: {
    category: 'notice',
  },
};

export const Newsletter: Story = {
  args: {
    category: 'newsletter',
  },
};

export const Gallery: Story = {
  args: {
    category: 'gallery',
  },
};
