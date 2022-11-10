import React from "react";

import { useAppSelector } from "../../../store/hooks";
import { selectArticleToEdit } from "../../../store/slices/admin.slices";
import PublishArticleForm from "../../organisms/publishArticleForm/PublishArticleForm";
import PageTemplate from "../../templates/Page.template";
import { components } from "../../../types";
import { showImage } from "../../../services/imagesServices";
import { updateArticleHelper } from "../../../helpers/publishArticle.helper";

const EditArticlePage = () => {
  const [articleData, setArticleData] =
    React.useState<
      (components["schemas"]["ArticleDetail"] & { imageData: any }) | null
    >(null);
  const article = useAppSelector(selectArticleToEdit);

  const setData = async (article: components["schemas"]["ArticleDetail"]) => {
    const { imageId } = article;
    const { data } = await showImage("24c7481f-36d7-48a7-ba92-a05cab074800");
    return setArticleData({
      ...article,
      imageData: data,
    });
  };
  React.useEffect(() => {
    setData(article);
  }, []);

  return (
    <PageTemplate>
      <PublishArticleForm
        titleValue={articleData?.title}
        imageFileValue={articleData?.imageData}
        markdownContentValue={articleData?.content}
        onSubmit={updateArticleHelper}
      />
    </PageTemplate>
  );
};

export default EditArticlePage;
