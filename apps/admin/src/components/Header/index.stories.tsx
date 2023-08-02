import Header from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Header',
  component: Header,
  parameters: {},
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
