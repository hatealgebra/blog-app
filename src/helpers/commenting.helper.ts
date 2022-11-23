import { createComment } from "../services/commentsServices";
import { components } from "../types";

export const publishComment = async (
  articleId: string,
  author: string,
  content: string,
  addComment: (comment: components["schemas"]["Comment"]) => void
) => {
  const trimmedContent = content.trim();
  try {
    const response = await createComment(articleId, author, trimmedContent);
    console.log(response);
    const comment = response.data;
    // addComment()
    return;
  } catch (e) {
    console.log(e);
    return e;
  }
};
