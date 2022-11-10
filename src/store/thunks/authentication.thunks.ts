import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios, AxiosRequestConfig } from "axios";
import { ELoginFormValidation } from "../../components/organisms/forms/LoginForm";
import { loginPOST } from "../../services/authServices";

export const postLoginThunk = createAsyncThunk(
  "auth/login",
  async (
    {
      email,
      pwd,
      setFormError,
    }: {
      email: string;
      pwd: string;
      setFormError: React.Dispatch<React.SetStateAction<ELoginFormValidation>>;
    },
    thunkAPI
  ) => {
    try {
      setFormError(ELoginFormValidation.CORRECT_LOGIN);
      const response = await loginPOST(email, pwd);
      return response;
    } catch (error) {
      const { status, data } = error.response;
      if (status === 400) {
        setFormError(ELoginFormValidation.INCORRECT_LOGIN);
      } else {
        setFormError(ELoginFormValidation.UNEXPECTED_ERROR);
      }
      return thunkAPI.rejectWithValue(data);
    }
  }
);

export const reAuthorizeThunk = createAsyncThunk(
  "auth/reauthorize",
  async (
    {
      email,
      pwd,
    }: {
      email: string;
      pwd: string;
    },
    thunkAPI
  ) => {
    try {
      const loginResponse = await loginPOST(email, pwd);
      return loginResponse;
    } catch (err) {
      const { data } = err.response;
      return thunkAPI.rejectWithValue(data);
    }
  }
);
