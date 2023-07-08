import FileButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ui/FileButton',
  component: FileButton,
  parameters: {},
} as Meta<typeof FileButton>;

type Story = StoryObj<typeof FileButton>;

export const Primary: Story = {
  args: {
    file: {
      fileUrl:
        'http://bucket.ottokeng.site/2bcb972e-710d-4751-8156-77ca09bf9474.png',
      fileName: '더모먼트.png',
      fileExtension: 'PNG',
    },
  },
};

export const Secondary: Story = {
  args: {
    file: {
      fileUrl:
        'http://bucket.ottokeng.site/b91a7636-25a8-428a-8f88-57377685b566.pdf',
      fileName: '2018산학겸임교사채용계획(공고용).pdf',
      fileExtension: 'pdf',
    },
  },
};
