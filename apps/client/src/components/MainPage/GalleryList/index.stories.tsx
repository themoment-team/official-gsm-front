import GallaryList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/MainPage/GallaryList',
  component: GallaryList,
  parameters: {},
} as Meta<typeof GallaryList>;

type Story = StoryObj<typeof GallaryList>;

export const Primary: Story = {
  args: {},
};
