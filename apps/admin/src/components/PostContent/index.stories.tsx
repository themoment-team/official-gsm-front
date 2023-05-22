import PostContent from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/PostContent",
  component: PostContent,
  parameters: {},
} as Meta<typeof PostContent>;

type Story = StoryObj<typeof PostContent>;

export const Primary: Story = {
  args: {
    postSeq: 2,
    postTitle: "제목",
    postWriter: "최장우",
    createdAt: "2023-05-02T23:22:46.366966",
    fileIsExist: false,
  },
};
