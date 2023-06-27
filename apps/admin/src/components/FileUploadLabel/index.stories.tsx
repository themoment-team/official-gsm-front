import FileUploadLabel from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/FileUploadLabel',
  component: FileUploadLabel,
  parameters: {},
} as Meta<typeof FileUploadLabel>;

type Story = StoryObj<typeof FileUploadLabel>;

export const Upload: Story = {
  args: {},
};
