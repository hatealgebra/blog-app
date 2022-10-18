import React from "react";

import createArticleSubmit from "../../../helpers/createArticleSubmit.helper";
import PublishArticleForm from "./PublishArticleForm";

export const CreateNewArticleFormExample = () => (
  <PublishArticleForm onSubmit={createArticleSubmit} />
);
// export const EditArticleFormExample = () => <EditArticleForm />;

export default {
  title: "Organisms/Forms",
  component: PublishArticleForm,
};
