import ApproveModal from '.';

import type { Meta, StoryObj } from '@storybook/react';


export default {
  title: 'admin/ApproveModal',
  component: ApproveModal,
  parameters: {},
} as Meta<typeof ApproveModal>;

type Story = StoryObj<typeof ApproveModal>;

export const Primary: Story = {
  args: {
    close,
  },
};
