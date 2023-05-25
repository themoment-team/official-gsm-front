import Category from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Category",
  component: Category,
  parameters: {},
} as Meta<typeof Category>;

type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      navigation: {
        pathname: ["*/notice", "*/gallery", "*/familyCorrespondence"],
      },
    },
  },
};
