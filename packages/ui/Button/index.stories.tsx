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

export const disabled = Template.bind({});

disabled.args = {
  children: "Button",
  disabled: true,
};

export const loading = Template.bind({});

loading.args = {
  isLoading: true,
};
