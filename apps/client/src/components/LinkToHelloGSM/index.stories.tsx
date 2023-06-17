import LinkToHelloGSM from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/LinkToHelloGSM',
  component: LinkToHelloGSM,
  parameters: {},
} as Meta<typeof LinkToHelloGSM>;

type Story = StoryObj<typeof LinkToHelloGSM>;

export const Primary: Story = {
  args: {},
};
