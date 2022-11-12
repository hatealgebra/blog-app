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

const IndexPage = () => {
  const feedStatus = useAppSelector(selectArticleFeedStatus);
  const feedData = useAppSelector(selectArticleFeedItems);
  const feedItems = useAppSelector(selectArticleFeedItems);
  const authToken = useAppSelector(selectAuthToken);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getArticlesFeedThunk(authToken));
    console.log(authToken);
  }, []);

  return (
    <PageTemplate>
      <ArticleFeed isLoading={feedStatus} items={feedData} />
    </PageTemplate>
  );
};

export default IndexPage;
