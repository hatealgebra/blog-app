import React from "react";
import Discussion from "./Discussion";

import articleMockJSON from "../../../__mocks__/asyncData/get/articlesDetailsResponse.mock.json";
import { Provider } from "react-redux";
import mockStore from "../../../__mocks__/store.mock";

export const DiscussionExample = () => {
  const comments = articleMockJSON[4].comments;
  return (
    <Provider store={mockStore}>
      <Discussion commentsArray={comments} />
    </Provider>
  );
};

export default {
  title: "Organisms/Discussion",
  component: Discussion,
};
