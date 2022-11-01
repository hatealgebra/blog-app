import { AxiosRequestConfig } from "axios";
import React from "react";
import setUpInterceptor from "../../services/axiosInterceptors";
import { appLiftingAxiosProtected } from "../../services/services.config";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectAuthLogin,
  selectAuthToken,
} from "../../store/slices/auth.slices";

import { reAuthorizeThunk } from "../../store/thunks/authentication.thunks";
import store from "../../__mocks__/store.mock";

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  React.useEffect(() => {
    setUpInterceptor(store);
  }, []);

  return children;
};

interface AxiosInterceptorProps {
  children: React.ReactElement | React.ReactNode;
}

export default AxiosInterceptor;
