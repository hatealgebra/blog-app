import { createAsyncThunk } from "@reduxjs/toolkit";
import { listArticles } from "../../services/articlesOperations";
import { articleFeedActions } from "../slices/articleFeed.slice";

export const getArticlesFeedThunk = createAsyncThunk(
  "articleFeed/getArticlesFeedThunk",
  async (_, thunkAPI) => {
    try {
      const response = await listArticles();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// export const getMyArticles = createAsyncThunk(
//   GET_ARTICLES,
//   async (apiKey: string, thunkAPI) => {
//     try {
//       const response = await getArticles(apiKey);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );
