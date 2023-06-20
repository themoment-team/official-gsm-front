import IntroductionTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title/IntroductionTitle',
  component: IntroductionTitle,
  parameters: {},
} as Meta<typeof IntroductionTitle>;

type Story = StoryObj<typeof IntroductionTitle>;

export const Section1: Story = {
  args: {
    children: <>AI 시대를 선도할</>,
    pointColor: 'lime',
    className: 'secondTitle',
    pointPosition: 'bottom',
    pointSize: '11px',
  },
};

export const BorderTitle: Story = {
  args: {
    children: <>상상과 실력으로</>,
    pointColor: 'lime',
    className: 'firstTitle',
    pointPosition: 'bottom',
    pointSize: '13px',
  },
};

export const Section3: Story = {
  args: {
    children: <>학교가 추구하는 교육 방향</>,
    pointColor: 'sky',
  },
};

export const Section4: Story = {
  args: {
    children: <>소프트웨어 인재 양성을 위한 교육 과정</>,
    pointColor: 'lime',
  },
};

export const Section5: Story = {
  args: {
    children: (
      <>
        창의 융합력을 갖춘 <br />
        글로벌 소프트웨어 학과 소개
      </>
    ),

    pointColor: 'sky',
  },
};

export const Section6: Story = {
  args: {
    children: <>꿈 끼 업(UP) 고(GO) 특색사업</>,
    pointColor: 'lime',
  },
};

export const Section7: Story = {
  args: {
    children: <>GSM이 원하는 학교상</>,
    pointColor: 'sky',
  },
};

export const Section8: Story = {
  args: {
    children: <>GSM과 함께하는 MOU 기업</>,
    pointColor: 'lime',
  },
};

export const SemiTitle: Story = {
  args: {
    children: <>우리 학교 갤러리</>,
    pointColor: 'lime',
  },
};
