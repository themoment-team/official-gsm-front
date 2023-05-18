import GalleryCard from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/GalleryCard",
  component: GalleryCard,
  parameters: {},
} as Meta<typeof GalleryCard>;

type Story = StoryObj<typeof GalleryCard>;

export const Primary: Story = {
  args: {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    title: "2023년 교육과정 설명회(2)",
    description: `2023년 광주소프트웨어마이스터고등학교 교육과정\n설명회 실시 일시: 2023. 3.30(목) 19:00 ~`,
    writer: "정문정",
    date: "2022.05.23",
  },
};
