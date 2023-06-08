import Post from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Post',
  component: Post,
  parameters: {},
} as Meta<typeof Post>;

type Story = StoryObj<typeof Post>;

const fileInfo = [
  {
    fileUrl:
      'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
  {
    fileUrl:
      'http://bucket.ottokeng.site/743d7afd-690c-404a-b7fb-b6fe97598504.jpg',
    fileName: 'images.jpg',
    fileExtension: 'JPG,',
  },
];

export const Primary: Story = {
  args: {
    fileInfo: fileInfo,
  },
};
