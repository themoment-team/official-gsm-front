import LinkToHelloGSM from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/LinkToHelloGSM',
  component: LinkToHelloGSM,
  parameters: {},
} as Meta<typeof LinkToHelloGSM>;

type Story = StoryObj<typeof LinkToHelloGSM>;

export const Primary: Story = {
  args: {
    children: <>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</>,
  },
};
