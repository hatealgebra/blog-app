import { createSlice } from "@reduxjs/toolkit";
import { ESortByOptions } from "../../components/molecules/editArticleRow/EditArticleRowButtons";

import { components } from "../../types";
import type { RootState } from "..";
import { getArticlesFeedThunk } from "../thunks/articles.thunk";
// import { getMyArticles } from "../thunks/articles.thunk";

const initialState = {
  status: "idle",
  data: {},
  error: false,
} as {
  status: "idle" | "loading";
  error: boolean;
  data: {
    originalSort: components["schemas"]["ArticleDetail"][];
    nowSort: components["schemas"]["ArticleDetail"][];
    articleToEdit: components["schemas"]["ArticleDetail"];
  };
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    sortMyArticles: (state, { payload }) => {
      if (payload === ESortByOptions.ORIGINAL) {
        state.data.nowSort = state.data.originalSort;
      } else {
        state.data.nowSort.items = [...state.data.originalSort.items].sort(
          (a, b) => {
            if (a[payload] > b[payload]) {
              return 1;
            } else if (a[payload] < b[payload]) {
              return -1;
            } else {
              return 0;
            }
          }
        );
      }
    },
    setArticleToEdit: (state, { payload }) => {
      state.data.articleToEdit = state.data.originalSort.items![payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesFeedThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getArticlesFeedThunk.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.status = "idle";
      state.data.originalSort = payload;
      state.data.nowSort = payload;
    });
    builder.addCase(getArticlesFeedThunk.rejected, (state, { payload }) => {
      state.error = true;
      state.status = "idle";
      state.data = initialState.data;
    });
  },
});

// ACTIONS
export const { sortMyArticles, setArticleToEdit } = adminSlice.actions;
// SELECTORS
export const selectMyArticlesItems = (state: RootState) =>
  state.reducer.admin.data.nowSort.items;
// export const selectArticleToEdit = (state: RootState) =>
// state.admin.data.articleToEdit;
export const selectMyArticlesStatus = (state: RootState) =>
  state.reducer.admin.status;
export const selectMyArticlesError = (state: RootState) =>
  state.reducer.admin.error;
export const selectArticleToEdit = (state: RootState) =>
  state.reducer.admin.data.articleToEdit;

export default adminSlice.reducer;
