import React from "react";

import EditArticleRow from "./EditArticleRow";
import EditArticleRowButtons from "./EditArticleRowButtons";

import articlesMockJSON from "../../../__mocks__/responses/articlesResponse.mock.json";
import { action } from "@storybook/addon-actions";

const { title, perex, comments } = articlesMockJSON.items[0];

export const ArticleRowExample = () => {
  return (
    <EditArticleRow
      title={title}
      perex={perex}
      comments={comments}
      dispatch={() => action("Action was dispatched")}
    />
  );
};

export const ArticleRowButtonsExample = () => {
  return (
    <EditArticleRowButtons
      setCheckAll={action("setCheckAll called!")}
      dispatchSort={action("Dispatch sort called!")}
      dispatchEdit={action("Dispatch edit called")}
      dispatchDelete={action("Dispatch delete called!")}
      dispatchReset={action("Dispatch reset called!")}
    />
  );
};

export default {
  title: "Molecules/Edit article",
  component: EditArticleRow,
};
