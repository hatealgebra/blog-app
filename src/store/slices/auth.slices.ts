import { createSlice } from "@reduxjs/toolkit";
import { components } from "../../types";
import { RootState } from "..";

import {
  postLoginThunk,
  reAuthorizeThunk,
} from "../thunks/authentication.thunks";

// FIXME: Name of the keys
export const authInitialState = {
  status: "idle",
  data: { authorization: {} },
  error: false,
} as {
  status: "idle" | "loading";
  data: {
    tenant: components["schemas"]["Tenant"] | null;
    authorization: components["schemas"]["AccessToken"];
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
      state.data.authorization = payload.data;
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
  state.persistedReducer.data.authorization?.access_token;
export const selectAuthStatus = (state: RootState) =>
  state.persistedReducer.status;
export const selectAuthError = (state: RootState) =>
  state.persistedReducer.error;

export default authSlice.reducer;
