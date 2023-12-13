import PopUpZone from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PopUpZone',
  component: PopUpZone,
} as Meta<typeof PopUpZone>;

type Story = StoryObj<typeof PopUpZone>;

export const Light: Story = {
  args: {},
};
