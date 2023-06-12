import Title from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/Title',
  component: Title,
  parameters: {},
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Section3: Story = {
  args: {
    children: <>학교가 추구하는 교육 방향</>,
    point: { pointColor: 'blue', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
  },
};

export const Section4: Story = {
  args: {
    children: <>소프트웨어 인재 양성을 위한 교육 과정</>,
    point: { pointColor: 'green', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
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
    point: { pointColor: 'blue', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
  },
};

export const Section6: Story = {
  args: {
    children: <>꿈 끼 업(UP) 고(GO) 특색사업</>,
    point: { pointColor: 'green', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
  },
};

export const Section7: Story = {
  args: {
    children: <>GSM이 원하는 학교상</>,
    point: { pointColor: 'blue', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
  },
};

export const Section8: Story = {
  args: {
    children: <>GSM과 함께하는 MOU 기업</>,
    point: { pointColor: 'green', pointPosition: 'top', pointSize: '18px' },
    font: { className: 'h1' },
  },
};

export const SemiTitle: Story = {
  args: {
    children: <>우리 학교 갤러리</>,
    point: { pointColor: 'green', pointPosition: 'top', pointSize: '15px' },
    font: { className: 'title' },
  },
};
