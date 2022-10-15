import React from "react";
import ArticleFeed from "../components/organisms/articleFeed/ArticleFeed";
import PageTemplate from "../components/templates/Page.template";
import { ADMIN_CONFIG } from "../services/admin";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectArticleFeedItems,
  selectArticleFeedStatus,
} from "../store/slices/articleFeed.slice";

import { getArticles } from "../store/thunks/articles.thunk";

const IndexPage = () => {
  const feedStatus = useAppSelector(selectArticleFeedStatus);
  const feedData = useAppSelector(selectArticleFeedItems);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getArticles(ADMIN_CONFIG.API_KEY));
  }, []);

  return (
    <PageTemplate>
      <ArticleFeed isLoading={feedStatus} items={feedData} />
    </PageTemplate>
  );
};

export default IndexPage;
