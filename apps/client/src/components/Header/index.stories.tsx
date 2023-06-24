import Header from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Header',
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const DarkBackground: Story = {
  args: {
    isBackgroundWhite: false,
    segment: '',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const LightBackground: Story = {
  args: {
    isBackgroundWhite: true,
    segment: '',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
