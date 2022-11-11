import React from "react";
import { createArticleHelper } from "../../../helpers/publishArticle.helper";

import PublishArticleForm from "../../organisms/publishArticleForm/PublishArticleForm";
import PageTemplate from "../../templates/Page.template";

const CreateNewArticlePage = () => {
  return (
    <PageTemplate>
      <PublishArticleForm />
    </PageTemplate>
  );
};

export default CreateNewArticlePage;
