import Category from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/Category',
  component: Category,
  argTypes: {},
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Primary: Story = (args: any) => <Category {...args} />;

Primary.args = {
  category: 'notice',
};
