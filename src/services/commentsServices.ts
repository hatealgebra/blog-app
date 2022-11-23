import axios from "axios";
import { appLiftingAxios, appLiftingAxiosProtected } from "./services.config";

export const createComment = async (
  articleId: string,
  author: string,
  content: string
) => {
  try {
    return appLiftingAxiosProtected.post("/comments", {
      headers: {
        data: { articleId, author, content },
      },
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
