import axios from "axios";
import { BASE_API_URL } from "../utils/contants";
import { API_KEY } from "./services.config";

export const createComment = async (
  author: string,
  content: string,
  access_token: string
) => {
  try {
    return await axios({
      method: "post",
      url: `${BASE_API_URL}/comments`,
      headers: { Authorization: access_token, "X-API-KEY": API_KEY },
      data: {
        author,
        content,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const voteUp = async (commentId: string) => {
  try {
    return await axios({
      method: "post",
      url: `${BASE_API_URL}/${commentId}/vote/up`,
      headers: {
        "X-API-KEY": API_KEY,
      },
    });
  } catch (e) {
    throw e;
  }
};
export const voteDown = async (commentId: string) => {
  try {
    return await axios({
      method: "post",
      url: `${BASE_API_URL}/${commentId}/vote/down`,
      headers: {
        "X-API-KEY": API_KEY,
      },
    });
  } catch (e) {
    throw e;
  }
};
