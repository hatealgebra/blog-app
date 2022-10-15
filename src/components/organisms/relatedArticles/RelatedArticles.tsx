import React from "react";
import { components } from "../../../types";
import ArticlePreviewSmall from "../../molecules/articlePreview/ArticlePreviewSmall";
import { RelatedArticlesContainer } from "./relatedArticles.styled";

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  console.log(articles);
  return (
    <RelatedArticlesContainer className="related-articles">
      <h3>Related Articles</h3>
      <div className="related-articles__articles">
        {articles.map((article) => (
          <ArticlePreviewSmall heading={article.title!}>
            {article.perex!}
          </ArticlePreviewSmall>
        ))}
      </div>
    </RelatedArticlesContainer>
  );
};

// TODO: Article Props

interface RelatedArticlesProps {
  articles: components["schemas"]["Article"][];
}

export default RelatedArticles;
