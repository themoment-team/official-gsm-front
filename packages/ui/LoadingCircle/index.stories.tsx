import LoadingCricle from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/LoadingCircle",
  component: LoadingCricle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
    },
  },
} as Meta<typeof LoadingCricle>;

type Story = StoryObj<typeof LoadingCricle>;

export const Basic: Story = {};
