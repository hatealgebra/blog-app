import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import articleFeedReducer from "../store/slices/articleFeed.slice";
import myArticleReducer from "../store/slices/myArticles.slice";
import authReducer from "../store/slices/auth.slices";

// REDUX-PERSIST
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { USER_CONFIG } from "../services/services.config";

const { TENANT_ID, CREATED_AT, LAST_USED_AT, NAME } = USER_CONFIG;

const mockAuth = { status: "idle" };

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  articleFeed: articleFeedReducer,
});

const store = configureStore({
  reducer: { reducer, persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: {
    reducer: {
      articleFeed: {
        status: "idle",
        data: { items: undefined },
        error: false,
      },
    },
    persistedReducer: {
      status: "idle",
      data: {
        tenant: {
          tenantId: TENANT_ID,
          createdAt: CREATED_AT,
          lastUsedAt: LAST_USED_AT,
          name: NAME,
        },
        login: { email: NAME, pwd: "Applifting123" },
        access_token: {},
      },
      error: false,
      _persist: { ...persistConfig, version: 0, rehydrated: true },
    },
  },
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;