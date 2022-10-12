import React from "react";
import { components } from "../../../types";
import { timeDifference } from "../../../utils/date.utils";

import ProgressBar from "../../atoms/loadingIcon/ProgressBar";
import ArticlePreview from "../../molecules/articlePreview/ArticlePreview";
import {
  ArticlesContainer,
  CenterContainer,
  StyledArticleFeed,
} from "./articleFeed.styled";

const ArticleFeed = ({
  isLoading,
  items,
}: components["schemas"]["ArticleList"] & { isLoading: boolean }) => {
  return (
    <StyledArticleFeed className="article-feed">
      <h1 className="article-feed__heading">Recent articles</h1>
      <div className="article-feed__articles">
        {isLoading ? (
          <CenterContainer>
            <ProgressBar />
          </CenterContainer>
        ) : items!.length === 0 ? (
          <CenterContainer>
            <h3>No Articles to show</h3>
          </CenterContainer>
        ) : (
          <ArticlesContainer>
            {items!.map(
              ({
                articleId,
                title,
                perex,
                createdAt,
                imageId,
                comments,
              }: components["schemas"]["Article"] &
                components["schemas"]["ArticleDetail"]) => (
                <ArticlePreview
                  articleId={articleId}
                  title={title}
                  perex={perex}
                  createdAt={timeDifference(Date.now() / 1000, createdAt)}
                  imageId={imageId}
                  comments={comments}
                  author="Unknow author"
                />
              )
            )}
          </ArticlesContainer>
        )}
      </div>
    </StyledArticleFeed>
  );
};

export default ArticleFeed;
