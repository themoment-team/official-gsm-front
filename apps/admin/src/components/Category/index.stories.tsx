import Category from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Category",
  component: Category,
  argTypes: {
    pathname: {
      control: { type: "select" },
      options: ["/notice", "/gallery", "/newsletter"],
    },
  },
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Primary: Story = (args: any) => <Category {...args} />;

Primary.args = {
  category: "/notice",
  width: "1080px",
};