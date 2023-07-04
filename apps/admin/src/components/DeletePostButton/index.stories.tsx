import DeletePostButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/DeletePostButton',
  component: DeletePostButton,
  parameters: {},
} as Meta<typeof DeletePostButton>;

type Story = StoryObj<typeof DeletePostButton>;

export const Primary: Story = {
  args: {},
};
