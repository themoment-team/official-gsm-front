import Category from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Category",
  component: Category,
  parameters: {},
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: [
    { path: "/notice", label: "공지사항" },
    { path: "/gallery", label: "행사갤러리" },
    { path: "/familyCorrespondence", label: "가정통신문" },
  ],
};
