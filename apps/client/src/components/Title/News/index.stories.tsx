import NewsTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/NewsTitle',
  component: NewsTitle,
  parameters: {},
} as Meta<typeof NewsTitle>;

type Story = StoryObj<typeof NewsTitle>;

export const Gallery: Story = {
  args: {
    children: <>우리 학교 갤러리 </>,
    pointColor: '#B2E449',
  },
};

export const NewsLetter: Story = {
  args: {
    children: <>가정통신문</>,
    pointColor: '#B2E449',
  },
};
