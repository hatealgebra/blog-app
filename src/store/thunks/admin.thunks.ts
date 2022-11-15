import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteArticle } from "../../services/articlesOperations";
import { components } from "../../types";

export const getMyArticlesThunk = createAsyncThunk(
  "myArticles/getMyArticlesThunk",
  async (_, thunkAPI) => {
    try {
    } catch (e) {}
  }
);

export const deleteArticleThunk = createAsyncThunk(
  "myArticle/deleteArticle",
  async (
    {
      articleId,
      originalArray,
      nowSortArray,
    }: {
      articleId: string;
      originalArray: components["schemas"]["ArticleDetail"][];
      nowSortArray: components["schemas"]["ArticleDetail"][];
    },
    thunkAPI
  ) => {
    try {
      deleteArticle(articleId);
      const newOriginalArray = originalArray.filter(
        ({ articleId: id }) => id !== articleId
      );
      const newNowSortArray = nowSortArray.filter(
        ({ articleId: id }) => id !== articleId
      );

      return { newOriginalArray, newNowSortArray };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
