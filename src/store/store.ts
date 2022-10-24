import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import articleFeedReducer from "./slices/articleFeed.slice";
import myArticleReducer from "./slices/myArticles.slice";
import authReducer from "./slices/auth.slices";

// REDUX-PERSIST
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
