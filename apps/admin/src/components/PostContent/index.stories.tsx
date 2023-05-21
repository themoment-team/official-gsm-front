import PostContent from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/PostContent",
  component: PostContent,
  parameters: {},
} as Meta<typeof PostContent>;

type Story = StoryObj<typeof PostContent>;

export const Primary: Story = {
  args: {},
};
