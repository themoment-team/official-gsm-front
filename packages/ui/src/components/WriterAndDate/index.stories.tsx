import WriterAndDate from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ui/WriterAndDate',
  component: WriterAndDate,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof WriterAndDate>;

type Story = StoryObj<typeof WriterAndDate>;

export const Primary: Story = {
  args: {
    postWriter: '최장우',
    createdAt: '2023-05-03T19:47:01.250197',
  },
};
