import React from "react";
import ReadArticle from "../organisms/readArticle/ReadArticle";
import PageTemplate from "./Page.template";

import articleMockJSON from "../../__mocks__/responses/articleDetailResponse.mock.json";
import relatedArticlesMock from "../../__mocks__/responses/articlesResponse.mock.json";
import RelatedArticles from "../organisms/relatedArticles/RelatedArticles";
import Discussion from "../organisms/discussion/Discussion";
import { StyledArticlePageContainer } from "./templates.styled";

const ArticlePage = () => {
  const { title, imageId, author, createdAt, content, comments } =
    articleMockJSON;

  return (
    <PageTemplate isArticle>
      <StyledArticlePageContainer>
        <ReadArticle
          title={title}
          imageId={imageId}
          author={author}
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
