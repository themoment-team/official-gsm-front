import PromotionVideo from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PromotionVideo',
  component: PromotionVideo,
} as Meta<typeof PromotionVideo>;

type Story = StoryObj<typeof PromotionVideo>;

export const DarkBackground: Story = {};
