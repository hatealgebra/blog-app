import axios from "axios";

import { BASE_API_URL } from "../../utils/contants";
import { API_KEY } from "../services.config";

export const callGetArticles = async () => {
  return await axios({
    method: "get",
    url: `${BASE_API_URL}/articles`,
    headers: { "X-API-KEY": API_KEY },
  });
};
