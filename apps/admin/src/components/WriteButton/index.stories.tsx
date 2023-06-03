import WriteButton from '.';

import type { Meta, StoryObj } from '@storybook/react';


export default {
  title: 'admin/WriteButton',
  component: WriteButton,
  parameters: {},
} as Meta<typeof WriteButton>;

type Story = StoryObj<typeof WriteButton>;

export const Write: Story = {
  args: {
    isEdit: false,
  },
};

export const Edit: Story = {
  args: {
    isEdit: true,
  },
};
