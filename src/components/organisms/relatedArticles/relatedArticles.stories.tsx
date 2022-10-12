import React from "react";
import RelatedArticles from "./RelatedArticles";
import relatedArticlesJSON from "../../../__mocks__/json/articles.json";

export const RelatedArticlesSection = () => (
  <RelatedArticles articles={relatedArticlesJSON.data} />
);

export default {
  title: "Organisms/Related Articles section",
  component: RelatedArticles,
};
