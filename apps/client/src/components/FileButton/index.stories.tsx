import FileButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/FileButton',
  component: FileButton,
  parameters: {},
} as Meta<typeof FileButton>;

type Story = StoryObj<typeof FileButton>;

export const Primary: Story = {
  args: {
    file: {
      fileUrl: 'https://static-cse.canva.com/blob/649373/createbanners.jpg',
      fileName: '[2022 서식] 특성화고장학금 지원신청서.pdf',
      fileExtension: 'JPG',
    },
  },
};
