import FileCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/FileCard',
  component: FileCard,
  parameters: {},
} as Meta<typeof FileCard>;

type Story = StoryObj<typeof FileCard>;

export const getFileBox: Story = {
  args: {
    fileName: '파이명명ㅁ염염ㅇ',
  },
};
