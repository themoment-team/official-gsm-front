import AuthTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';


export default {
  title: 'admin/AuthTitle',
  component: AuthTitle,
  parameters: {},
} as Meta<typeof AuthTitle>;

type Story = StoryObj<typeof AuthTitle>;

export const Primary: Story = {
  args: {
    children: (
      <>
        교사 회원 가입을 위해 이름과
        <br />
        아이디 비밀번호를 입력해야 돼요.
      </>
    ),
    textAlign: 'left',
    marginTop: '0',
  },
};

export const Center: Story = {
  args: {
    ...Primary.args,
    textAlign: 'center',
  },
};

export const Right: Story = {
  args: {
    ...Primary.args,
    textAlign: 'right',
  },
};
