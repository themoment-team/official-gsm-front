import UploadButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Button/Upload',
  component: UploadButton,
  parameters: {},
} as Meta<typeof UploadButton>;

type Story = StoryObj<typeof UploadButton>;

export const Upload: Story = {
  args: {},
};
