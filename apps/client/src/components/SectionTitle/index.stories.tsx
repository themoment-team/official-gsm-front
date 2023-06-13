import { SubTitle } from 'client/components';

import SectionTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/SectionTitle',
  component: SectionTitle,
  parameters: {},
} as Meta<typeof SectionTitle>;

type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {
  args: {
    textAlign: 'center',
    children: (
      <>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
      </>
    ),
  },
};

export const Left: Story = {
  args: {
    textAlign: 'left',
    children: (
      <>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
      </>
    ),
  },
};

export const Right: Story = {
  args: {
    textAlign: 'right',
    children: (
      <>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
        <SubTitle>창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성</SubTitle>
      </>
    ),
  },
};
