import FileButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/FileButton',
  component: FileButton,
  argTypes: {},
} as Meta<typeof FileButton>;

type Story = StoryObj<typeof FileButton>;

export const Primary: Story = {
  args: {
    fileInfo: {
      fileUrl:
        'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
      fileName: 'images.jpg',
    },
  },
};
