import React from "react";
import ArticlePreviewSmall from "../../molecules/articlePreview/ArticlePreviewSmall";
import { RelatedArticlesContainer } from "./relatedArticles.styled";

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <RelatedArticlesContainer>
      <h3>Related Articles</h3>
      <div className="related-articles__articles">
        {articles.map((article) => (
          <ArticlePreviewSmall heading={article.title}>
            {article.text}
          </ArticlePreviewSmall>
        ))}
      </div>
    </RelatedArticlesContainer>
  );
};

// TODO: Article Props
type SmallArticle = { title: string; text: string };

interface RelatedArticlesProps {
  articles: [SmallArticle];
}

export default RelatedArticles;
