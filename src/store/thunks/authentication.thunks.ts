import { createAsyncThunk } from "@reduxjs/toolkit";
import { callPostLogin } from "../../services/user/userPOST";

export const postLoginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, pwd }: { email: string; pwd: string }, thunkAPI) => {
    try {
      const response = await callPostLogin(email, pwd);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
