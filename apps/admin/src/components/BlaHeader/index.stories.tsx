import BlaHeader from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/BlaHeader",
  component: BlaHeader,
  parameters: {},
} as Meta<typeof BlaHeader>;

type Story = StoryObj<typeof BlaHeader>;

export const Gallery: Story = {
  args: {
    kind: "👇지금 우리 학교는",
    seeMore: true,
    isAdmin: true,
  },
};

export const Notice: Story = {
  args: {
    kind: "📢 공지사항",
    seeMore: false,
    isAdmin: true,
  },
};

export const FamilyCorrespondence: Story = {
  args: {
    kind: "📄 가정통신문",
    seeMore: false,
    isAdmin: true,
  },
};
