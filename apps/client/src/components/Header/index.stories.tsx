import Header from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Header',
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    isAbovePromotionVideo: false,
    segment: '',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AbovePromotionVideo: Story = {
  args: {
    isAbovePromotionVideo: true,
    segment: '',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
