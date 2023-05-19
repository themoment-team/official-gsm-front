import InputBox from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/InputBox",
  component: InputBox,
  parameters: {},
} as Meta<typeof InputBox>;

type Story = StoryObj<typeof InputBox>;

export const ContentTextarea: Story = {
  args: {
    width: "36.125rem",
    height: "6.75rem",
    placeholder: "내용을 입력해주세요.",
  },
};

export const PasswordTextarea: Story = {
  args: {
    width: "21.4375rem",
    height: "2.75rem",
    placeholder: "비밀번호를 입력해주세요.",
  },
};
