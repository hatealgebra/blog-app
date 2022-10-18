import axios from "axios";
import { components, operations } from "../../types";

import { BASE_API_URL } from "../../utils/contants";

export const publishNewArticle = (
  content: components["schemas"]["ArticleDetail"],
  apiKey: string
) => {
  const { articleId, title, imageId } = content;

  console.log(articleId);
  console.log(title);
  console.log(imageId);
  console.log(perex);
  console.log(createdAt);
  console.log(updateAt);

  return axios<operations["createArticle"]>({
    method: "post",
    url: `${BASE_API_URL}/articles`,
    headers: { "X-API-KEY": apiKey },
    data: {
      content: {},
    },
  });
};
