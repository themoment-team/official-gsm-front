import GalleryCarousel from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GalleryCarousel',
  component: GalleryCarousel,
  parameters: {},
} as Meta<typeof GalleryCarousel>;

type Story = StoryObj<typeof GalleryCarousel>;

const fileInfo = [
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
    currentIndex: 0,
  },
};
