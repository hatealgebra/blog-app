import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import { ThemeProvider } from "styled-components";
import ArticleFeed from "../components/organisms/articleFeed/ArticleFeed";
import PageTemplate from "../components/templates/Page.template";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectArticleFeedItems,
  selectArticleFeedStatus,
} from "../store/slices/articleFeed.slice";
import { selectAuthToken } from "../store/slices/auth.slices";

import { getArticlesFeedThunk } from "../store/thunks/articles.thunk";

const RecentArticles = ({ pageContext }: PageProps) => {
  const feedStatus = useAppSelector(selectArticleFeedStatus);
  const feedData = useAppSelector(selectArticleFeedItems);
  const dispatch = useAppDispatch();

  console.log(pageContext);

  React.useEffect(() => {
    dispatch(getArticlesFeedThunk());
  }, []);

  return (
    <PageTemplate>
      <ArticleFeed isLoading={feedStatus} items={feedData} />
    </PageTemplate>
  );
};

export default RecentArticles;
