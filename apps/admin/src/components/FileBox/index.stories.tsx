import FileBox from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/FileBox',
  component: FileBox,
  parameters: {},
} as Meta<typeof FileBox>;

type Story = StoryObj<typeof FileBox>;

export const getFileBox: Story = {
  args: {
    filename: '파이명명ㅁ염염ㅇ',
  },
};
