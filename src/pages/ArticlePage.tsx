import React from "react";

import Discussion from "../components/organisms/discussion/Discussion";
import ReadArticle from "../components/organisms/readArticle/ReadArticle";
import RelatedArticles from "../components/organisms/relatedArticles/RelatedArticles";
import PageTemplate from "../components/templates/Page.template";
import { StyledArticlePageContainer } from "../components/templates/templates.styled";

import articleMockJSON from "../__mocks__/responses/articleDetailResponse.mock.json";
import relatedArticlesMock from "../__mocks__/responses/articlesResponse.mock.json";

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
