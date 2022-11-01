import React from "react";
import Discussion from "./Discussion";

import articleMockJSON from "../../../__mocks__/responses/articleDetailResponse.mock.json";

export const DiscussionExample = () => (
  <Discussion comments={articleMockJSON.comments} />
);

export default {
  title: "Organisms/Discussion",
  component: Discussion,
};
