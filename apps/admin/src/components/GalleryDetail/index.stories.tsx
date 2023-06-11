import GalleryDetail from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GalleryDetail',
  component: GalleryDetail,
  parameters: {},
} as Meta<typeof GalleryDetail>;

type Story = StoryObj<typeof GalleryDetail>;

export const Primary: Story = {
  args: {
    postSeq: 0,
  },
};
