import React from "react";
import publishArticle from "../../../helpers/publishArticle.helper";
import { createArticle } from "../../../services/articlesOperations";

import PublishArticleForm from "../../organisms/publishArticleForm/PublishArticleForm";
import PageTemplate from "../../templates/Page.template";

const CreateNewArticlePage = () => {
  const fn = () => console.log("testing");
  return (
    <PageTemplate>
      <PublishArticleForm onSubmit={fn} />
    </PageTemplate>
  );
};

export default CreateNewArticlePage;
