import React from "react";
import CreateNewArticlePage from "./CreateNewArticlePage";
import MyArticlesPage from "./MyArticlesPage";

export const MyArticles = () => <MyArticlesPage />;
export const CreateNewArticle = () => <CreateNewArticlePage />;

export default {
  title: "Pages/Admin pages",
  subcomponent: { MyArticlesPage },
};
