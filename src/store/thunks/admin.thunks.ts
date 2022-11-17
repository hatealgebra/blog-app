import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteArticle } from "../../services/articlesOperations";
import { components } from "../../types";

export const getMyArticlesThunk = createAsyncThunk(
  "admin/getMyArticlesThunk",
  async (_, thunkAPI) => {
    try {
    } catch (e) {}
  }
);
export const createArticleThunk = createAsyncThunk(
  "admin/createArticleThunk",
  async ({}, thunkAPI) => {}
);

export const deleteArticleThunk = createAsyncThunk(
  "admin/deleteArticle",
  async (
    {
      articleId,
      originalArray,
    }: {
      articleId: string;
      originalArray: components["schemas"]["ArticleDetail"][];
    },
    thunkAPI
  ) => {
    try {
      deleteArticle(articleId);
      const newOriginalArray = originalArray.filter(
        ({ articleId: id }) => id !== articleId
      );

      return newOriginalArray;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
