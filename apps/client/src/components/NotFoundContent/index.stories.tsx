import NotFoundContent from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/NotFoundContent',
  component: NotFoundContent,
  parameters: {},
} as Meta<typeof NotFoundContent>;

type Story = StoryObj<typeof NotFoundContent>;

export const Primary: Story = {};
