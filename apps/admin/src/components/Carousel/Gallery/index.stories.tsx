import GalleryCarousel from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Carousel/Gallery',
  component: GalleryCarousel,
  parameters: {},
} as Meta<typeof GalleryCarousel>;

type Story = StoryObj<typeof GalleryCarousel>;

export const Primary: Story = {
  args: {
    postSeq: 0,
  },
};
