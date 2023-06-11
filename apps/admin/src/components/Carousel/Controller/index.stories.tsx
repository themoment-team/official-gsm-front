import CarouselController from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Carousel/Controller',
  component: CarouselController,
  parameters: {},
} as Meta<typeof CarouselController>;

type Story = StoryObj<typeof CarouselController>;

export const Primary: Story = {
  args: {
    postSeq: 0,
    currentIndex: 0,
    setCurrentIndex: () => 0,
  },
};
