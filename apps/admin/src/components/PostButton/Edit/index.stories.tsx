import EditButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Button/Edit',
  component: EditButton,
  parameters: {},
} as Meta<typeof EditButton>;

type Story = StoryObj<typeof EditButton>;

export const Edit: Story = {
  args: {
    href: '',
  },
};
