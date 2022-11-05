import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticle, listArticles } from "../../services/articlesOperations";
import { components } from "../../types";

export const getArticlesFeedThunk = createAsyncThunk(
  "articleFeed/getArticlesFeedThunk",
  async (access_token: string | undefined, thunkAPI) => {
    try {
      const articlesResponse = await listArticles();
      const { items } = articlesResponse.data;
      const newArticlesArray = await Promise.all(
        items.map(async (article: components["schemas"]["Article"]) => {
          const { articleId, createdAt } = article;
          console.log(createdAt);
          const getArticleResponse = await getArticle(articleId!, access_token);
          const { comments } = getArticleResponse.data;

          return { ...article, comments };
        })
      );
      return { ...articlesResponse.data, items: newArticlesArray };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getArticleDetailThunk = createAsyncThunk(
  "article/Feed/getArticleDetailThunk",
  async (
    { articleId, access_token }: { articleId: string; access_token: string },
    thunkAPI
  ) => {
    try {
      const response = await getArticle(articleId, access_token);
      return response;
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
