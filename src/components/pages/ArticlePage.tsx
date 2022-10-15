import React from "react";
import ReadArticle from "../organisms/readArticle/ReadArticle";
import PageTemplate from "../templates/Page.template";

import articleMockJSON from "../../__mocks__/json/article.mock.json";
import articlesMockJSON from "../../__mocks__/json/articles.json";
import styled from "styled-components";
import RelatedArticles from "../organisms/relatedArticles/RelatedArticles";
import Discussion from "../organisms/discussion/Discussion";
import { StyledArticlePageContainer } from "../templates/templates.styled";

const StyledArticlePage = styled.div`
  display: grid;
`;

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
        <RelatedArticles articles={articlesMockJSON.items} />
      </StyledArticlePageContainer>
    </PageTemplate>
  );
};

export default ArticlePage;
