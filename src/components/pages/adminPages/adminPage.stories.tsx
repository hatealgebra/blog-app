import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import CreateNewArticlePage from "./CreateNewArticlePage";
import EditArticlePage from "./EditArticlePage";

import articleDetailMock from "../../../__mocks__/responses/articleDetailResponse.mock.json";

import MyArticlesPage from "./MyArticlesPage";
import { setArticleToEdit } from "../../../store/slices/admin.slices";
import { Story } from "@storybook/react";
import { Provider } from "react-redux";
import mockStore from "../../../__mocks__/store.mock";

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
