import Button from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: "Button",
};
