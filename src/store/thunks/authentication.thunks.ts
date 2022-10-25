import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginPOST } from "../../services/authServices";

export const postLoginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, pwd }: { email: string; pwd: string }, thunkAPI) => {
    try {
      const response = await loginPOST(email, pwd);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
