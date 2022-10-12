import axios from "axios";

import { BASE_API_URL } from "../../utils/contants";

export const listAllArticles = (apiKey: string) => {
  return axios({
    method: "get",
    url: `${BASE_API_URL}/articles`,
    headers: { "X-API-KEY": apiKey },
  });
};
