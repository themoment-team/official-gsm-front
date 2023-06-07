import WriteButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Button/Write',
  component: WriteButton,
  parameters: {},
} as Meta<typeof WriteButton>;

type Story = StoryObj<typeof WriteButton>;

export const Write: Story = {
  args: {
    href: '',
  },
};
