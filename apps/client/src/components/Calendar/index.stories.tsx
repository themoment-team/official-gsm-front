import { Calendar } from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Calendar',
  component: Calendar,
} as Meta<typeof Calendar>;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    year: 1,
    month: 10,
  },
};
