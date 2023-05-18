import InformCard from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/InformCard",
  component: InformCard,
  parameters: {},
} as Meta<typeof InformCard>;

type Story = StoryObj<typeof InformCard>;

export const Primary: Story = {
  args: {
    title: "2023학년도 교과서 파일(PDF) 제공 안내",
    subtitle: "1.코로나-19에 따른 학습 공백 최소화를 위하여 한국교교",
    writer: "정문정",
    date: "2022.05.23",
  },
};
