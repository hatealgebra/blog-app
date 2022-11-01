import { Store } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { reAuthorizeThunk } from "../store/thunks/authentication.thunks";
import { appLiftingAxiosProtected } from "./services.config";

const setUpInterceptor = (store: Store) => {
  const configCallback = async (config: AxiosRequestConfig) => {
    console.log(config);
    const { dispatch, getState } = store;
    const { login, access_token } = getState().persistedReducer.data;
    const { email, pwd } = login;
    if (!config.headers["Authorization"]) {
      const response = await dispatch(reAuthorizeThunk({ email, pwd }));
      config.headers = config.headers ?? {};
      config.headers!.Authorization = response.payload.data.access_token;
    } else {
      config.headers = config.headers ?? {};
      config.headers.Authorization = access_token.access_token;
    }
    return config;
  };

  appLiftingAxiosProtected.interceptors.request.use(
    async (config) => {
      return configCallback(config);
    },

    (error) => {
      Promise.reject(error);
    }
  );

  appLiftingAxiosProtected.interceptors.response.use(
    async (response) => response,
    async (error) => {
      console.log(error);
    }
  );
};

export default setUpInterceptor;
