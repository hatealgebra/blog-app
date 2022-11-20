import React from "react";
import Discussion from "./Discussion";

import articleMockJSON from "../../../__mocks__/responses/articlesDetailsResponse.mock.json";

export const DiscussionExample = () => (
  <Discussion comments={articleMockJSON[0].comments} />
);

export default {
  title: "Organisms/Discussion",
  component: Discussion,
};
