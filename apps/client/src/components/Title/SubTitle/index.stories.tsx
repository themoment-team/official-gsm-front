import SubTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title/SubTitle',
  component: SubTitle,
  parameters: {},
} as Meta<typeof SubTitle>;

type Story = StoryObj<typeof SubTitle>;

export const Primary: Story = {
  args: {
    children: <>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</>,
  },
};
