import CategoryHeader from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/CategoryHeader',
  component: CategoryHeader,
  parameters: {},
} as Meta<typeof CategoryHeader>;

type Story = StoryObj<typeof CategoryHeader>;

export const FAMILY_NEWSLETTER: Story = {
  args: {
    category: 'FAMILY_NEWSLETTER',
  },
};

export const EVENT_GALLERY: Story = {
  args: {
    category: 'EVENT_GALLERY',
  },
};
