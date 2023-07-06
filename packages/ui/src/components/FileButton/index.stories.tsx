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
        'http://bucket.ottokeng.site/d237c2c8-1691-4186-93bd-e8c94d499e28.png',
      fileName: '[2022 서식] 특성화고장학금 지원신청서.pdf',
      fileExtension: 'JPG',
    },
  },
};

export const Secondary: Story = {
  args: {
    file: {
      fileUrl:
        'http://bucket.ottokeng.site/d237c2c8-1691-4186-93bd-e8c94d499e28.png',
      fileName:
        '[2022 서식] 특성화고장학금 지원신청서fdsafdsafdsafsadfsdaffdas.pdf',
      fileExtension: 'JPG',
    },
  },
};
