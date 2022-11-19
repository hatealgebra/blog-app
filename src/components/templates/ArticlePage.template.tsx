import React from "react";
import ReadArticle from "../organisms/readArticle/ReadArticle";
import PageTemplate from "./Page.template";

import relatedArticlesMock from "../../__mocks__/responses/articlesResponse.mock.json";
import RelatedArticles from "../organisms/relatedArticles/RelatedArticles";
import Discussion from "../organisms/discussion/Discussion";
import { StyledArticlePageContainer } from "./templates.styled";

const ArticlePage = ({ pageContext: { article } }) => {
  const { articleId, createdAt, title, imageId, content, comments } = article;

  return (
    <PageTemplate isArticle>
      <StyledArticlePageContainer>
        <ReadArticle
          title={title}
          imageId={imageId}
          author={"Pavel Vondra"}
          createdAt={createdAt}
          content={content}
          comments={comments}
        />
        <Discussion comments={comments} />
        <RelatedArticles articles={relatedArticlesMock.items} />
      </StyledArticlePageContainer>
    </PageTemplate>
  );
};

export default ArticlePage;
