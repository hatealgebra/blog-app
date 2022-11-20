import React from "react";
import ReadArticle from "../organisms/readArticle/ReadArticle";
import PageTemplate from "./Page.template";

import RelatedArticles from "../organisms/relatedArticles/RelatedArticles";
import Discussion from "../organisms/discussion/Discussion";
import { StyledArticlePageContainer } from "./templates.styled";
import { listArticles } from "../../services/articlesOperations";
import { components } from "../../types";

const ArticlePage = ({
  pageContext: { article },
}: {
  pageContext: {
    article: components["schemas"]["Article"] &
      components["schemas"]["ArticleDetail"];
  };
}) => {
  const { articleId, createdAt, title, imageId, content, comments } = article;
  const [relatedArticles, setRelatedArticles] = React.useState(null);

  console.log(relatedArticles);
  React.useEffect(() => {
    const getRelatedArticles = async () => {
      const response = await listArticles();
      const articlesFiltered = response.data.items.filter(
        (article: components["schemas"]["Article"]) =>
          article.articleId !== articleId
      );
      setRelatedArticles(articlesFiltered);
    };

    getRelatedArticles();
  }, []);

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
        <Discussion commentsArray={comments} />
        <RelatedArticles articles={relatedArticles} />
      </StyledArticlePageContainer>
    </PageTemplate>
  );
};

export default ArticlePage;
