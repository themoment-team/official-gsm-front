import ToBackButton from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/ToBackButton',
  component: ToBackButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof ToBackButton>;

type Story = StoryObj<typeof ToBackButton>;

export const Primary: Story = {
  args: {
    onClick: () => {
      console.log('clicked');
    },
  },
};
