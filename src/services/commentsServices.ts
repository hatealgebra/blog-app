import axios from "axios";
import { appLiftingAxios, appLiftingAxiosProtected } from "./services.config";

export const createComment = async (
  author: string,
  content: string,
  access_token: string
) => {
  try {
    return appLiftingAxios.post("/comments", {
      headers: { Authorization: access_token, data: { author, content } },
    });
  } catch (e) {
    throw e;
  }
};

export const voteUp = async (commentId: string) => {
  try {
    return appLiftingAxiosProtected.post(`${commentId}/vote/up`);
  } catch (e) {
    throw e;
  }
};
export const voteDown = async (commentId: string) => {
  try {
    return appLiftingAxiosProtected.post(`${commentId}/vote/down`);
  } catch (e) {
    throw e;
  }
};
