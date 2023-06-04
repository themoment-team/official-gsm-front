import Pagination from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Pagination',
  component: Pagination,
  parameters: {},
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    totalPages: 3,
  },
};
