import Title from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title',
  component: Title,
  parameters: {},
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    children: '상황에 따라 시간이 걸릴 수 있어요.',
  },
};
