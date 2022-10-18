import axios from "axios";

import { BASE_API_URL } from "../../utils/contants";

export const getArticles = (apiKey: string, acessToken: string) => {
  return axios({
    method: "get",
    url: `${BASE_API_URL}/articles`,
    headers: { "X-API-KEY": apiKey, Authorization: acessToken },
  });
};
