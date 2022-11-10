import React from "react";
import CreateNewArticlePage from "./CreateNewArticlePage";
import EditArticlePage from "./EditArticlePage";

import MyArticlesPage from "./MyArticlesPage";

export const MyArticles = () => <MyArticlesPage />;
export const CreateNewArticle = () => <CreateNewArticlePage />;
export const EditArticle = () => <EditArticlePage />;

export default {
  title: "Pages/Admin pages",
  subcomponent: { MyArticlesPage, CreateNewArticlePage },
};
