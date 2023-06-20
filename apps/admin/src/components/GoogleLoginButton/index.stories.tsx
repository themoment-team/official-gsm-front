import GoogleLoginButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GoogleLoginButton',
  component: GoogleLoginButton,
  parameters: {},
} as Meta<typeof GoogleLoginButton>;

type Story = StoryObj<typeof GoogleLoginButton>;

export const Signin: Story = {
  args: {
    text: 'Google 로그인',
  },
};

export const SigninWarring: Story = {
  args: {
    text: '다시 로그인',
  },
};
