import React from "react";
import ArticleFeed from "./ArticleFeed";

import articlesJSON from "../../../__mocks__/json/articles.json";

export const ArticleFeedLoading = () => <ArticleFeed isLoading items={[]} />;
export const ArticleFeedEmpty = () => (
  <ArticleFeed isLoading={false} items={[]} />
);
export const ArticleFeedFull = () => (
  <ArticleFeed isLoading={false} items={articlesJSON.data} />
);

export default {
  title: "Organisms/Article Feed",
  component: ArticleFeed,
};
