import React from "react";
import IndexPage from "../../pages";
import LoginPage from "./LoginPage";

export const ArticleFeedPage = () => <IndexPage />;
export const LoginFormPage = () => <LoginPage />;

export default {
  title: "Pages/Form pages",
  subcomponents: { LoginPage },
};
