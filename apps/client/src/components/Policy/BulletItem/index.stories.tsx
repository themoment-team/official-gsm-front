import BulletItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Policy/BulletItem',
  component: BulletItem,
} as Meta<typeof BulletItem>;

type Story = StoryObj<typeof BulletItem>;

export const Light: Story = {
  args: {
    children:
      '광주소프트웨어마이스터고등학교가 취급하는 모든 개인정보는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. ',
  },
};

export const Dark: Story = {
  args: {
    isDark: true,
    children:
      '광주소프트웨어마이스터고등학교가 취급하는 모든 개인정보는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. ',
  },
};
