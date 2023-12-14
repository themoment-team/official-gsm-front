import MealList from '.';

import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'client/MealList',
    component: MealList,
} as Meta<typeof MealList>;

type Story = StoryObj<typeof MealList>;

export const Primary: Story = {};