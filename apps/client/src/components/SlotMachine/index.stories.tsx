import SlotMachine from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/SlotMachine',
  component: SlotMachine,
  parameters: {},
} as Meta<typeof SlotMachine>;

type Story = StoryObj<typeof SlotMachine>;

export const Primary: Story = {
  args: {},
};
