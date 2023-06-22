import NoticeBanner from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/NoticeBanner',
  component: NoticeBanner,
} as Meta<typeof NoticeBanner>;

type Story = StoryObj<typeof NoticeBanner>;

export const Primary: Story = {
  args: {
    post: {
      postSeq: 0,
      postTitle: '2023학년도 교과서 파일(PDF) 제공 안내',
      postWriter: '정문정',
      createdAt: '2023-05-24T04:47:01.250197',
      contentPreview: `1. '코로나-19'에 따른 학습공백 최소화를 위하여 한국교육학술정보fdsafasd`,
    },
  },
};
