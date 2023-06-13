import NewsletterCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/NewsletterCard',
  component: NewsletterCard,
  parameters: {},
} as Meta<typeof NewsletterCard>;

type Story = StoryObj<typeof NewsletterCard>;

export const Blue: Story = {
  args: {
    post: {
      postSeq: 0,
      postTitle: '광주광역시 교육청 여학생 생리용품 구입 지원금 신...',
      postWriter: '정문정',
      createdAt: '2023-05-24T04:47:01.250197',
      contentPreview:
        '광주광역시교육청 관내 고등학교 여학생 생리용품 구입 지원금 신...',
    },
    color: 'blue',
  },
};

export const Green: Story = {
  args: {
    post: {
      postSeq: 0,
      postTitle: '광주광역시 교육청 여학생 생리용품 구입 지원금 신...',
      postWriter: '정문정',
      createdAt: '2023-05-24T04:47:01.250197',
      contentPreview:
        '광주광역시교육청 관내 고등학교 여학생 생리용품 구입 지원금 신...',
    },
    color: 'green',
  },
};
