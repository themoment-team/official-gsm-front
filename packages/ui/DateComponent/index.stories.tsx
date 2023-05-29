import DateComponent from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/DateComponent",
  component: DateComponent,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof DateComponent>;

type Story = StoryObj<typeof DateComponent>;

export const Primary: Story = {
  args: {
    createdAt: "2023-05-02T23:22:46.366966",
  },
};

export const NonFormat: Story = {
  args: {
    createdAt: "2023-11-12T23:22:46.366966",
  },
};
