import GalleryCard from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/GalleryCard',
  component: GalleryCard,
  parameters: {},
} as Meta<typeof GalleryCard>;

type Story = StoryObj<typeof GalleryCard>;

export const Primary: Story = {
  args: {
    post: {
      postTitle: '2023년 중학생 대상 학교 방문 체험 프로그램',
      postWriter: '정문정',
      createdAt: '2023-05-03T08:18:48.250197',
      postSeq: 1,
      thumbnailUrl:
        'https://static-cse.canva.com/blob/649373/createbanners.jpg',
      contentPreview:
        '대상: 중학생 20여명 (문성중 외 10교)장소: 실습실내용: SW개발과 체험 (파이썬을 이용한 수학 프로그램입니다)',
    },
  },
};
