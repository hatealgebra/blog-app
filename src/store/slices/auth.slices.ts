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
  data: {},
  error: false,
} as {
  status: "idle" | "loading";
  data: {
    tenant: components["schemas"]["Tenant"] | null;
    authorization?: components["schemas"]["AccessToken"];
    login?: {
      email: string;
      pwd: string;
    };
  };
  error: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logout: (state, { payload }) => {
      state.data = {};
    },
  },
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

export const { logout } = authSlice.actions;

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
export const selectAuthLogged = (state: RootState) => {
  const { authorization, login } = state.persistedReducer.data;
  console.log(authorization, login);
  return !authorization || !login ? false : true;
};

export default authSlice.reducer;
