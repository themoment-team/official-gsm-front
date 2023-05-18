import AuthModel from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/AuthModel",
  component: AuthModel,
  parameters: {},
} as Meta<typeof AuthModel>;

type Story = StoryObj<typeof AuthModel>;

export const School: Story = {
  args: {
    modelUrl: "/models/school.webm",
  },
};

export const Pending: Story = {
  args: {
    modelUrl: "/models/pending.webm",
  },
};
