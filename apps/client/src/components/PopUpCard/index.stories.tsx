import PopUpCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/PopUpCard',
  component: PopUpCard,
} as Meta<typeof PopUpCard>;

type Story = StoryObj<typeof PopUpCard>;

export const Primary: Story = {
  args: {
    index: 1,
    imgUrl: 'https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg',
    title:
      '2023년 중학생 대상 학교 방문 체험 프로그램 2023년 중학생 학교 방문합니다',
  },
};

export const Secondary: Story = {
  args: {
    index: 2,
    imgUrl: null,
    title: '2023년 중학생 대상 학교 방문',
  },
};
