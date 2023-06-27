import ListPageCategory from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ListPage/Category',
  component: ListPageCategory,
} as Meta<typeof ListPageCategory>;

type Story = StoryObj<typeof ListPageCategory>;

export const Primary: Story = {
  args: {},
};
