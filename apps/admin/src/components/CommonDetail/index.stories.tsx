import CommonDetail from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/CommonDetail',
  component: CommonDetail,
  parameters: {},
} as Meta<typeof CommonDetail>;

type Story = StoryObj<typeof CommonDetail>;

export const Primary: Story = {
  args: {
    postSeq: 1,
  },
};
