import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/admin.slices";

const adminStore = configureStore({
  reducer: adminReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type AdminState = ReturnType<typeof adminStore.getState>;
export type AdminDispatch = typeof adminStore.dispatch;

export default adminStore;
