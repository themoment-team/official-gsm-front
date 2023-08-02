import DeleteModal from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/DeleteModal',
  component: DeleteModal,
  parameters: {},
} as Meta<typeof DeleteModal>;

type Story = StoryObj<typeof DeleteModal>;

export const Primary: Story = {
  args: {},
};
