import React from "react";
import { components } from "../../../types";
import { timeDifference } from "../../../utils/date.utils";
import Comment from "../../molecules/comment/Comment";
import CreateComment from "../../molecules/createComment/CreateComment";
import {
  StyledDiscussion,
  StyledDiscussionComments,
} from "./discussion.styled";

// FIXME: Date-time to timestamp to get the string
const Discussion = ({ commentsArray }: DiscussionProps) => {
  const [comments, setComments] = React.useState(commentsArray);
  return (
    <StyledDiscussion className="discussion">
      <CreateComment dispatch={() => console.log("add comment")} />
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
              ></Comment>
            );
          })}
      </StyledDiscussionComments>
    </StyledDiscussion>
  );
};
// TODO: Create typing for comments from API
export interface DiscussionProps {
  commentsArray: components["schemas"]["Comment"][] | undefined;
}

export default Discussion;
