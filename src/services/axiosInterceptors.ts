import { Store } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { reAuthorizeThunk } from "../store/thunks/authentication.thunks";
import { appLiftingAxiosProtected } from "./services.config";

const setUpInterceptor = (store: Store) => {
  const handleRequest = async (config: AxiosRequestConfig) => {
    const { dispatch, getState } = store;
    const { login, authorization } = getState().persistedReducer.data;
    const { email, pwd } = login;
    if (!config.headers["Authorization"] || !authorization.access_token) {
      console.log(config.headers["Authorization"]);
      console.log(authorization.access_token);
      const response = dispatch(reAuthorizeThunk({ email, pwd }));
      console.log(response);
      config.headers = config.headers ?? {};
      config.headers["Authorization"] =
        getState().persistedReducer.data.access_token;
    } else {
      config.headers = config.headers ?? {};
      config.headers.Authorization = authorization.access_token;
    }
    return config;
  };

  appLiftingAxiosProtected.interceptors.request.use(
    async (config) => {
      return handleRequest(config);
    },

    (error) => {
      Promise.reject(error);
    }
  );

  // appLiftingAxiosProtected.interceptors.response.use(
  //   async (response) => response,
  //   async (error) => {
  //     const { config, response } = error;
  //     const { status } = response;
  //     const { dispatch, getState } = store;
  //     const { login } = getState().persistedReducer.data;
  //     const { email, pwd } = login;
  //     if (status === 403) {
  //       try {
  //         const response = await dispatch(reAuthorizeThunk({ email, pwd }));
  //         const { access_token } = await response.payload.data;
  //         config.headers = config.headers ?? {};
  //         config.headers!.Authorization = access_token;
  //       } catch (e) {
  //         return e;
  //       }
  //     }
  //   }
  // );
};

export default setUpInterceptor;
