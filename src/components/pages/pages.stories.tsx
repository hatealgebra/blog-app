import React from "react";

import IndexPage from "../../pages";
import ArticlePage from "./ArticlePage";

export const ArticleFeedPage = () => <IndexPage />;
export const ArticleReadPage = () => <ArticlePage />;

export default {
  title: "Pages/Articles pages",
  subcomponent: { IndexPage, ArticlePage },
};
