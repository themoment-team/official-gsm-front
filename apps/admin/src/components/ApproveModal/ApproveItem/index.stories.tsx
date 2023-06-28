import ApproveItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/ApproveModal/ApproveItem',
  component: ApproveItem,
  parameters: {},
} as Meta<typeof ApproveItem>;

type Story = StoryObj<typeof ApproveItem>;

export const Primary: Story = {
  args: {
    userName: '김형록',
    userSeq: '1',
    requestedAt: '2023.06.28',
  },
};
