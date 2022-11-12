import React from "react";

import CreateNewArticlePage from "./CreateNewArticlePage";
import EditArticlePage from "./EditArticlePage";

import MyArticlesPage from "./MyArticlesPage";
import { Story } from "@storybook/react";
import { Provider } from "react-redux";
import mockStore from "../../__mocks__/store.mock";

export const MyArticles = () => <MyArticlesPage />;
export const CreateNewArticle = () => <CreateNewArticlePage />;
export const EditArticle = () => <EditArticlePage />;

export default {
  title: "Pages/Admin pages",
  subcomponent: { MyArticlesPage, CreateNewArticlePage },
  decorators: [
    (Story: Story) => (
      <Provider store={mockStore}>
        <Story />
      </Provider>
    ),
  ],
};
