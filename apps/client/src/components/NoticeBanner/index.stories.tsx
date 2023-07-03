import NoticeBanner from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Notice/NoticeBanner',
  component: NoticeBanner,
} as Meta<typeof NoticeBanner>;

type Story = StoryObj<typeof NoticeBanner>;

export const Primary: Story = {};
