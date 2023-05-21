import DetailPageHeader from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/DetailPageHeader",
  component: DetailPageHeader,
  parameters: {},
} as Meta<typeof DetailPageHeader>;

type Story = StoryObj<typeof DetailPageHeader>;

export const Primary: Story = {
  args: {},
};
