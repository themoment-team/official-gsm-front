import ListPageCategory from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ListPage/Category',
  component: ListPageCategory,
  parameters: {},
} as Meta<typeof ListPageCategory>;

type Story = StoryObj<typeof ListPageCategory>;

export const Notice: Story = {
  args: {
    categoryParam: 'notice',
  },
};

export const Newsletter: Story = {
  args: {
    categoryParam: 'newsletter',
  },
};

export const Gallery: Story = {
  args: {
    categoryParam: 'gallery',
  },
};
