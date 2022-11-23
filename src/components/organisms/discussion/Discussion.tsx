import React from "react";
import { components } from "../../../types";
import Comment from "../../molecules/comment/Comment";
import CreateComment from "../../molecules/createComment/CreateComment";
import {
  StyledDiscussion,
  StyledDiscussionComments,
} from "./discussion.styled";

// FIXME: Date-time to timestamp to get the string
const Discussion = ({ articleId, commentsArray }: DiscussionProps) => {
  const [comments, setComments] = React.useState(commentsArray);

  const addComment = (commment: components["schemas"]["Comment"]) => {};

  return (
    <StyledDiscussion className="discussion">
      <CreateComment articleId={articleId} addComment={addComment} />
      <StyledDiscussionComments>
        {comments &&
          comments.map((comment, i) => {
            const { author, postedAt, score, content, articleId } = comment;
            return (
              <Comment
                key={`${articleId}-${i}`}
                articleId={articleId}
                author={author}
                postedAt={postedAt}
                score={score}
                content={content}
              />
            );
          })}
      </StyledDiscussionComments>
    </StyledDiscussion>
  );
};
// TODO: Create typing for comments from API
export interface DiscussionProps {
  articleId: string;
  commentsArray: components["schemas"]["Comment"][] | undefined;
}

export default Discussion;
