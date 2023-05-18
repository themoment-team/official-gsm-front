import Category from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Header",
  component: Category,
  parameters: {},
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: {
    menu: ["행사갤러리", "공지사항", "가정통신문"],
  },
};
