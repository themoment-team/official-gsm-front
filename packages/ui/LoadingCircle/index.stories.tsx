import LoadingCricle from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "LoadingCircle",
  component: LoadingCricle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
    },
  },
} as Meta<typeof LoadingCricle>;

const Template: StoryFn<typeof LoadingCricle> = (args) => (
  <LoadingCricle {...args} />
);

export const basic = Template.bind({});
