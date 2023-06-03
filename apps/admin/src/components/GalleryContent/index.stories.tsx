import GalleryContent from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GalleryContent',
  component: GalleryContent,
  parameters: {},
} as Meta<typeof GalleryContent>;

type Story = StoryObj<typeof GalleryContent>;

export const Primary: Story = {
  args: {
    postSeq: 2,
    postTitle: '제목',
    postWriter: '최장우',
    createdAt: '2023-05-02T23:22:46.366966',
    fileIsExist: false,
  },
};
