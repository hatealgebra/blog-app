import { createSlice } from "@reduxjs/toolkit";
import { Console } from "console";

import { components } from "../../types";
import type { RootState } from "../store";
import { getArticles } from "../thunks/articles.thunk";

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
    builder.addCase(getArticles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.status = "idle";
      state.data = payload;
    });
    builder.addCase(getArticles.rejected, (state, { payload }) => {
      state.error = true;
      state.status = "idle";
      state.data = initialState.data;
    });
  },
});

export const selectArticleFeedItems = (state: RootState) =>
  state.articleFeed.data.items;
export const selectArticleFeedStatus = (state: RootState) =>
  state.articleFeed.status;
export const selectArticleFeedError = (state: RootState) =>
  state.articleFeed.error;

export default articleFeedSlice.reducer;
