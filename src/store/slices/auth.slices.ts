import { createSlice } from "@reduxjs/toolkit";
import { components } from "../../types";
import { RootState } from "../store";
import {
  postLoginThunk,
  reAuthorizeThunk,
} from "../thunks/authentication.thunks";

export const authInitialState = {
  status: "idle",
  data: { access_token: {} },
  error: false,
} as {
  status: "idle" | "loading";
  data: {
    tenant: components["schemas"]["Tenant"] | null;
    access_token: components["schemas"]["AccessToken"];
    login: {
      email: string;
      pwd: string;
    };
  };
  error: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    // login

    builder.addCase(postLoginThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postLoginThunk.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.data = payload;
    });
    builder.addCase(postLoginThunk.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = true;
    });
    // reauthorize
    builder.addCase(reAuthorizeThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(reAuthorizeThunk.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.data.access_token = payload.data;
    });
    builder.addCase(reAuthorizeThunk.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = true;
    });
  },
});

export const selectAuthLogin = (state: RootState) =>
  state.persistedReducer.data.login;
export const selectAuthTenant = (state: RootState) =>
  state.persistedReducer.data.tenant ?? undefined;
export const selectAuthToken = (state: RootState) =>
  state.persistedReducer.data.access_token;
export const selectAuthStatus = (state: RootState) =>
  state.persistedReducer.status;
export const selectAuthError = (state: RootState) =>
  state.persistedReducer.error;

export default authSlice.reducer;
