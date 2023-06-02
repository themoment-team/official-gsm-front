import GalleryList from ".";

import type { Meta, StoryObj } from "@storybook/react";


export default {
  title: "admin/GalleryList",
  component: GalleryList,
  parameters: {},
} as Meta<typeof GalleryList>;

type Story = StoryObj<typeof GalleryList>;

const postList = [
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTh-LpZBuiyIbp-j7PK5mFf5AWBw9NYI6rg&usqp=CAU",
    fileIsExist: true,
  },
];

export const Primary: Story = {
  args: {
    postList: postList,
  },
};
