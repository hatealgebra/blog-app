import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import articleFeedReducer from "./slices/articleFeed.slice";
import myArticleReducer from "./slices/myArticles.slice";

export const reducer = combineReducers({
  articleFeed: articleFeedReducer,
  myArticles: myArticleReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
