import { action } from "@storybook/addon-actions";
import React from "react";
import CreateComment from "./CreateComment";

export const CreateCommentExample = () => (
  <CreateComment dispatch={() => action("Comment was created!")} />
);

export default {
  title: "Molecules/Create comment",
  component: CreateComment,
};
