import React from "react";
import { components } from "../../../types";
import ArticlePreviewSmall from "../../molecules/articlePreview/ArticlePreviewSmall";
import { RelatedArticlesContainer } from "./relatedArticles.styled";

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <RelatedArticlesContainer className="related-articles">
      <h3>Related Articles</h3>
      <div className="related-articles__articles">
        {articles && articles.length !== 0
          ? articles.map((article) => (
              <ArticlePreviewSmall
                key={article.articleId}
                heading={article.title!}
              >
                {article.perex!}
              </ArticlePreviewSmall>
            ))
          : "No articles to show"}
      </div>
    </RelatedArticlesContainer>
  );
};

// TODO: Article Props

interface RelatedArticlesProps {
  articles: components["schemas"]["Article"][] | null;
}

export default RelatedArticles;
