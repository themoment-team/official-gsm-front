import CategoryHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title/CategoryHeader',
  component: CategoryHeader,
  parameters: {},
} as Meta<typeof CategoryHeader>;

type Story = StoryObj<typeof CategoryHeader>;

export const Section1: Story = {
  args: {},
};
