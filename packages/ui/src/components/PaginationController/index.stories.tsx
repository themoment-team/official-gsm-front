import PaginationController from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ui/PaginationController',
  component: PaginationController,
  parameters: {},
} as Meta<typeof PaginationController>;

type Story = StoryObj<typeof PaginationController>;

export const Primary: Story = {
  args: {
    totalPages: 5,
    pageNumber: 1,
  },
};
