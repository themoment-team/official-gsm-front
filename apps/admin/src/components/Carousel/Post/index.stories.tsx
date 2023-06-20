import PostCarousel from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Carousel/Post',
  component: PostCarousel,
  parameters: {},
} as Meta<typeof PostCarousel>;

type Story = StoryObj<typeof PostCarousel>;

export const Primary: Story = {
  args: {
    postSeq: 1,
  },
};
