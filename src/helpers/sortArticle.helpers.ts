import { Dispatch } from "@reduxjs/toolkit";
import { ESortByOptions } from "../components/molecules/editArticleRow/EditArticleRowButtons";
import { components } from "../types";

export const sortMyArticles = (
  sortBy: ESortByOptions,
  articles: components["schemas"]["ArticleList"],
  dispatch: Dispatch
) => {
  const { BY_AUTHOR, BY_TITLE } = ESortByOptions;
  switch (sortBy) {
    case BY_AUTHOR:
  }
};
