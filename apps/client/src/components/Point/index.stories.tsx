import Point from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Point',
  component: Point,
  parameters: {},
} as Meta<typeof Point>;

type Story = StoryObj<typeof Point>;

export const Green: Story = {
  args: {
    color: 'green',
    size: '0.75rem',
    position: 'top',
  },
};
