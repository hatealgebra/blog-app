import React from "react";
import { components } from "../../../types";
import { timeDifference } from "../../../utils/date.utils";
import Comment from "../../molecules/comment/Comment";
import CreateComment from "../../molecules/createComment/CreateComment";
import {
  StyledDiscussion,
  StyledDiscussionComments,
} from "./discussion.styled";

const Discussion = ({ comments }: DiscussionProps) => {
  const timestampNow = Date.now();
  return (
    <StyledDiscussion className="discussion">
      <CreateComment dispatch={console.log("add comment")} />
      <StyledDiscussionComments>
        {comments.map((comment) => {
          const { author, postedAt, score, content, articleId } = comment;
          const postedAtString = timeDifference(timestampNow / 1000, postedAt);
          return (
            <Comment
              articleId={articleId}
              author={author}
              postedAt={postedAtString}
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
  comments: components["schemas"]["Comment"][];
}

export default Discussion;
