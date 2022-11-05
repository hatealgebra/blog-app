import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectArticleToEdit } from "../../../store/slices/admin.slices";
import PublishArticleForm from "../../organisms/publishArticleForm/PublishArticleForm";
import PageTemplate from "../../templates/Page.template";

const EditArticlePage = () => {
  const article = useAppSelector(selectArticleToEdit);
  const { title, content, imageId } = article;
  return (
    <PageTemplate>
      <PublishArticleForm
        titleValue={title ?? ""}
        imageFileValue={imageId}
        markdownContentValue={content ?? ""}
        onSubmit={}
      />
    </PageTemplate>
  );
};

export default EditArticlePage;
