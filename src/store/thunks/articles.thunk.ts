import { createAsyncThunk } from "@reduxjs/toolkit";
import { listAllArticles } from "../../services/articles/articlesGET";
import { articleFeedActions } from "../../utils/contants";

const { GET_ARTICLES } = articleFeedActions;

export const getArticles = createAsyncThunk(
  GET_ARTICLES,
  async (apiKey: string, thunkAPI) => {
    try {
      const response = await listAllArticles(apiKey);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getMyArticles = createAsyncThunk(
  GET_ARTICLES,
  async (apiKey: string, thunkAPI) => {
    try {
      const response = await listAllArticles(apiKey);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
