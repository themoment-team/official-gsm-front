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
    children: '📢 공지사항',
  },
};

export const Newsletter: Story = {
  args: {
    children: '📃 가정통신문',
  },
};

export const Gallery: Story = {
  args: {
    children: '📷 행사 갤러리',
  },
};
