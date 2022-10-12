import React from "react";
import { timeDifference } from "../../../utils/date.utils";
import Avatar from "../../atoms/avatar/Avatar";
import { StyledCommentContainer, StyledCommentCounter } from "./comment.styled";

import { RiArrowUpSLine } from "@react-icons/all-files/ri/RiArrowUpSLine";
import { RiArrowDownSLine } from "@react-icons/all-files/ri/RiArrowDownSLine";

const Comment = ({
  authorName,
  imageData,
  votingCounter,
  createdAt,
  children,
}: CommentProps) => {
  const [counterValue, setCounterValue] = React.useState(votingCounter);
  const timestampNow = Date.now();
  const hoursNow = timeDifference(timestampNow / 1000, createdAt);

  return (
    <StyledCommentContainer className="comment">
      <Avatar size="lg" />
      <h5 className="comment__author">{authorName}</h5>
      <span className="comment__time-diff label">{hoursNow}</span>
      <p className="comment__text">{children}</p>
      <StyledCommentCounter>
        <span data-testid="reactionCounter">
          {counterValue > 0 ? "+" : ""}
          {counterValue}
        </span>
        <button
          aria-label="vote-up"
          onClick={() => setCounterValue((prev) => prev + 1)}
        >
          <RiArrowUpSLine size="100%" />
        </button>
        <button
          aria-label="vote-down"
          onClick={() => setCounterValue((prev) => prev - 1)}
        >
          <RiArrowDownSLine size="100%" />
        </button>
      </StyledCommentCounter>
    </StyledCommentContainer>
  );
};

interface CommentProps {
  authorName: string;
  imageData?: string;
  votingCounter: number;
  createdAt: EpochTimeStamp;
  children: string;
}

export default Comment;
