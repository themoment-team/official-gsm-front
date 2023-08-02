import GalleryList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/MainPage/GalleryList',
  component: GalleryList,
  parameters: {},
} as Meta<typeof GalleryList>;

type Story = StoryObj<typeof GalleryList>;

export const Primary: Story = {
  args: {},
};
