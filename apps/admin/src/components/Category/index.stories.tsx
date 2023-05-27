import Category from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Category",
  component: Category,
  parameters: {},
} as Meta<typeof Category>;

type StoryProps = {
  pathname?: string | string[];
};

export const Primary: StoryObj<Partial<StoryProps>> = (
  args: Partial<StoryProps>
) => <Category {...args} />;

Primary.argTypes = {
  pathname: {
    control: {
      type: "select",
      options: ["/notice", "/gallery", "/familyCorrespondence"],
    },
  },
};

Primary.args = {
  pathname: "/notice",
};

Primary.parameters = {
  nextjs: {
    navigation: {
      pathname: "/notice",
    },
  },
};
