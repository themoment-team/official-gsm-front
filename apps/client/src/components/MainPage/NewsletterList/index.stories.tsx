import NewsletterList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/MainPage/NewsletterList',
  component: NewsletterList,
  parameters: {},
} as Meta<typeof NewsletterList>;

type Story = StoryObj<typeof NewsletterList>;

export const Primary: Story = {
  args: {},
};
