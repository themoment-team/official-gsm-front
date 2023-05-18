import AuthTitle from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/AuthTitle",
  component: AuthTitle,
  parameters: {},
} as Meta<typeof AuthTitle>;

type Story = StoryObj<typeof AuthTitle>;

export const Primary: Story = {
  args: {
    titleArray: ["저희 학교 선생님인지", "확인하기 위해 성함을 입력해주세요."],
    textAlign: "left",
  },
};

export const Center: Story = {
  args: {
    ...Primary.args,
    textAlign: "center",
  },
};

export const Right: Story = {
  args: {
    ...Primary.args,
    textAlign: "right",
  },
};
