import Banner from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Banner",
  component: Banner,
  parameters: {},
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    modelUrl: "/models/school.WebM",
  },
};
