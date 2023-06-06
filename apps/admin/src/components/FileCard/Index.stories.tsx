import FileCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/FileCard',
  component: FileCard,
  parameters: {},
} as Meta<typeof FileCard>;

type Story = StoryObj<typeof FileCard>;

export const Primary: Story = {
  args: {
    fileName: 'Untitled video - Made with Clipchamp (2)',
  },
};
