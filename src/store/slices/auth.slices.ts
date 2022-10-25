import { createSlice } from "@reduxjs/toolkit";
import { components } from "../../types";
import { RootState } from "../store";
import { postLoginThunk } from "../thunks/authentication.thunks";

const initialState = {
  status: "idle",
  data: {},
  error: false,
} as {
  status: "idle" | "loading";
  data: {
    tenant: components["schemas"]["Tenant"] | null;
    acessToken: components["schemas"]["AccessToken"];
  };
  error: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLoginThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(postLoginThunk.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.data.acessToken = payload;
    });
    builder.addCase(postLoginThunk.rejected, (state, { payload }) => {
      console.log("failed");
      state.status = "idle";
      state.error = true;
    });
  },
});

export const selectAuthTenant = (state: RootState) =>
  state.persistedReducer.data.tenant;
export const selectAuthToken = (state: RootState) =>
  state.persistedReducer.data.acessToken;
export const selectAuthStatus = (state: RootState) =>
  state.persistedReducer.status;
export const selectAuthError = (state: RootState) =>
  state.persistedReducer.error;

export default authSlice.reducer;
