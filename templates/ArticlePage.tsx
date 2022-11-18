import React from "react";

import Discussion from "../src/components/organisms/discussion/Discussion";
import ReadArticle from "../src/components/organisms/readArticle/ReadArticle";
import RelatedArticles from "../src/components/organisms/relatedArticles/RelatedArticles";
import PageTemplate from "../src/components/templates/Page.template";
import { StyledArticlePageContainer } from "../src/components/templates/templates.styled";

const ArticlePage = () => {
  return (
    <PageTemplate isArticle>
      <StyledArticlePageContainer>
        <ReadArticle
          title={"Title"}
          imageId={"id"}
          author={"author"}
          createdAt={"createdAt"}
          content={"content"}
          comments={[]}
        />
        <Discussion comments={[]} />
        {/* <RelatedArticles articles={relatedArticlesMock.items} /> */}
      </StyledArticlePageContainer>
    </PageTemplate>
  );
};

export default ArticlePage;
