import React from "react";
import createArticleSubmit from "../../../helpers/createArticleSubmit.helper";

import CreateNewArticleForm from "../../organisms/publishArticleForm/PublishArticleForm";
import PageTemplate from "../../templates/Page.template";

const CreateNewArticlePage = () => {
  return (
    <PageTemplate>
      <CreateNewArticleForm onSubmit={createArticleSubmit} />
    </PageTemplate>
  );
};

export default CreateNewArticlePage;
