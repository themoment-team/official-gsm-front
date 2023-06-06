import GalleryCard from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'admin/GalleryCard',
  component: GalleryCard,
  parameters: {},
} as Meta<typeof GalleryCard>;

type Story = StoryObj<typeof GalleryCard>;

export const Primary: Story = {
  args: {
    post: {
      postTitle: '2023년 교육과정 설명회(2)',
      postWriter: '정문정',
      createdAt: '2023-05-03T08:18:48.250197',
      postSeq: 1,
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU',
      contentPreview:
        '2023년 광주소프트웨어마이스터고등학교 교육과정 설명회 실시 일시: 2023. 3.30(목) 19:00 ~ 안녕하세요 안녕하세요 안녕하세요',
    },
  },
};
