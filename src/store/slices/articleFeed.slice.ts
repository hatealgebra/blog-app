import { createSlice } from "@reduxjs/toolkit";

import { components } from "../../types/declarations";
import type { RootState } from "..";
import { getArticlesFeedThunk } from "../thunks/articles.thunk";

const initialState = {
  status: "idle",
  data: { items: undefined },
  error: false,
} as {
  status: "idle" | "loading";
  error: boolean;
  data: components["schemas"]["ArticleList"];
};

export const articleFeedSlice = createSlice({
  name: "articleFeed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesFeedThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getArticlesFeedThunk.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.data = payload;
    });
    builder.addCase(getArticlesFeedThunk.rejected, (state, { payload }) => {
      state.error = true;
      state.status = "idle";
      state.data = initialState.data;
    });
  },
});

export const selectArticleFeedItems = (state: RootState) =>
  state.reducer.articleFeed.data.items;
export const selectArticleFeedStatus = (state: RootState) =>
  state.reducer.articleFeed.status;
export const selectArticleFeedError = (state: RootState) =>
  state.reducer.articleFeed.error;

export enum articleFeedActions {
  GET_ARTICLES = "articleFeed/getArticlesFeedThunk",
}

export default articleFeedSlice.reducer;
