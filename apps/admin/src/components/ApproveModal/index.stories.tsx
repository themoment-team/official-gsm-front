import ApproveModal from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/ApproveModal",
  component: ApproveModal,
  parameters: {},
} as Meta<typeof ApproveModal>;

type Story = StoryObj<typeof ApproveModal>;

export const Primary: Story = {
  args: {
    date: "2023.05.24",
    name: "정문정",
  },
};
