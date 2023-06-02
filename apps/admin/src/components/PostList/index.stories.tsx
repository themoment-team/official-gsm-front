import PostList from ".";

import type { Meta, StoryObj } from "@storybook/react";


export default {
  title: "admin/PostList",
  component: PostList,
  parameters: {},
} as Meta<typeof PostList>;

type Story = StoryObj<typeof PostList>;

const postList = [
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl: null,
    fileIsExist: true,
  },
  {
    postSeq: 1,
    postTitle: "Test",
    postWriter: "Tester",
    createdAt: "2023-05-03T19:47:01.250197",
    thumbnailUrl: null,
    fileIsExist: true,
  },
];

export const Primary: Story = {
  args: {
    postList: postList,
  },
};
