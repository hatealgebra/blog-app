import React from "react";
import { timeDifference } from "../../../utils/date.utils";
import Avatar from "../../atoms/avatar/Avatar";
import { StyledCommentContainer, StyledCommentCounter } from "./comment.styled";

import { RiArrowUpSLine } from "@react-icons/all-files/ri/RiArrowUpSLine";
import { RiArrowDownSLine } from "@react-icons/all-files/ri/RiArrowDownSLine";
import { components } from "../../../types";

const Comment = ({
  author,
  score,
  postedAt,
  content,
}: components["schemas"]["Comment"]) => {
  console.log(content);
  const [counterValue, setCounterValue] = React.useState(score);
  const timestampNow = Date.now();
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
        <button
          aria-label="vote-up"
          onClick={() => setCounterValue((prev) => prev! + 1)}
        >
          <RiArrowUpSLine size="100%" />
        </button>
        <button
          aria-label="vote-down"
          onClick={() => setCounterValue((prev) => prev! - 1)}
        >
          <RiArrowDownSLine size="100%" />
        </button>
      </StyledCommentCounter>
    </StyledCommentContainer>
  );
};

export default Comment;
