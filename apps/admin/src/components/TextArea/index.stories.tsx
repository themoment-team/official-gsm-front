import TextArea from '.';

import type { Meta, StoryObj } from '@storybook/react';


export default {
  title: 'admin/TextArea',
  component: TextArea,
  parameters: {},
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const ContentTextarea: Story = {
  args: {
    width: '36.125rem',
    height: '6.75rem',
    placeholder: '내용을 입력해주세요.',
  },
};
