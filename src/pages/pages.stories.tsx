import React from "react";

import IndexPage from "./index";
import ArticlePage from "../../templates/ArticlePage";

export const ArticleFeedPage = () => <IndexPage />;
export const ArticleReadPage = () => <ArticlePage />;

export default {
  title: "Pages/Articles pages",
  subcomponent: { IndexPage, ArticlePage },
};
