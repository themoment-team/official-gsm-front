import AuthDescription from '.';

import type { Meta, StoryObj } from '@storybook/react';


export default {
  title: 'admin/AuthDescription',
  component: AuthDescription,
  parameters: {},
} as Meta<typeof AuthDescription>;

type Story = StoryObj<typeof AuthDescription>;

export const Primary: Story = {
  args: {
    children: '상황에 따라 시간이 걸릴 수 있어요.',
  },
};
