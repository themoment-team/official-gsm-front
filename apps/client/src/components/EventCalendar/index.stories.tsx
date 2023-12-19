import EventCalendar from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'client/EventCalendar',
  component: EventCalendar,
} as Meta<typeof EventCalendar>;

type Story = StoryObj<typeof EventCalendar>;

export const Primary: Story = {
  args: {
    event: [
      '2023 동백제',
      '학부모 상담주간',
      '학부모 상담주간',
      '학부모 상담주간',
      '학부모 상담주간',
      '학부모 상담주간',
    ],
  },
};
