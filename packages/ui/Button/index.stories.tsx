import Button from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    width: '36.125rem',
  },
};

export const signup: Story = {
  args: {
    children: '회원가입',
    bgColor: '#DEE449',
    fontColor: '#050505',
    hoverBgColor: '#E9EC9E',
  },
};
