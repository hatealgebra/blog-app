import React from "react";
import { timeDifference } from "../../../utils/date.utils";
import Avatar from "../../atoms/avatar/Avatar";
import { StyledCommentContainer, StyledCommentCounter } from "./comment.styled";

import { RiArrowUpSLine } from "@react-icons/all-files/ri/RiArrowUpSLine";
import { RiArrowDownSLine } from "@react-icons/all-files/ri/RiArrowDownSLine";
import { components } from "../../../types/declarations";
import { voteDown, voteUp } from "../../../services/commentsServices";

const Comment = ({
  commentId,
  author,
  score,
  postedAt,
  content,
  articleId,
}: components["schemas"]["Comment"]) => {
  const [counterValue, setCounterValue] = React.useState(score ?? 0);
  const timestampNow = Date.now();

  const increaseScore = async () => {
    try {
      voteUp(commentId!);
      setCounterValue((prev) => prev + 1);
    } catch (e) {
      console.log(e);
    }
  };
  const decreaseScore = async () => {
    try {
      voteDown(commentId!);
      setCounterValue((prev) => prev - 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledCommentContainer className="comment">
      <Avatar size="lg" />
      <h5 className="comment__author">{author}</h5>
      <span className="comment__time-diff label">
        {timeDifference(timestampNow, postedAt!)}
      </span>
      <p className="comment__text">{content}</p>
      <StyledCommentCounter>
        <span data-testid="reactionCounter">
          {counterValue! > 0 ? "+" : ""}
          {counterValue}
        </span>
        <button aria-label="vote-up" onClick={increaseScore}>
          <RiArrowUpSLine size="100%" />
        </button>
        <button aria-label="vote-down" onClick={decreaseScore}>
          <RiArrowDownSLine size="100%" />
        </button>
      </StyledCommentCounter>
    </StyledCommentContainer>
  );
};

export default Comment;
