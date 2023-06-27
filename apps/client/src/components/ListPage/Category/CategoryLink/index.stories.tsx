import CategoryLink from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/ListPage/CategoryLink',
  component: CategoryLink,
} as Meta<typeof CategoryLink>;

type Story = StoryObj<typeof CategoryLink>;

export const Gallery: Story = {
  args: {
    href: '/list/gallery',
    isSelected: true,
    children: '행사 갤러리',
  },
};

export const Notice: Story = {
  args: {
    href: '/list/notice',
    isSelected: false,
    children: '공지사항',
  },
};

export const Newsletter: Story = {
  args: {
    href: '/list/newsletter',
    isSelected: false,
    children: '가정통신문',
  },
};
