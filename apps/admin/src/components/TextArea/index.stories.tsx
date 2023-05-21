import TextArea from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/TextArea",
  component: TextArea,
  parameters: {},
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const ContentTextarea: Story = {
  args: {
    width: "578px",
    height: "108px",
    placeholder: "내용을 입력해주세요.",
  },
};
