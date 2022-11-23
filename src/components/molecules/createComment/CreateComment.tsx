import React from "react";
import { publishComment } from "../../../helpers/commenting.helper";
import { useAppSelector } from "../../../store/hooks";
import { selectAuthName } from "../../../store/slices/auth.slices";
import { components } from "../../../types";
import Avatar from "../../atoms/avatar/Avatar";
import Button from "../../atoms/button/Button";
import { ErrorText } from "../../atoms/errorText/error.styled";
import { StyledTextArea } from "../../atoms/input/input.styled";
import { StyledCreateCommentForm } from "./createComment.styled";

const CreateComment = ({ articleId, addComment }: CreateCommentProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [formHandling, setFormHandling] = React.useState<FormValidation>(
    FormValidation.PASSED
  );
  const loggedUser = useAppSelector(selectAuthName);

  const onSubmit = (
    e: React.FormEvent,
    addComment: (commment: components["schemas"]["Comment"]) => void
  ) => {
    e.preventDefault();
    if (content.length < 25) {
      setFormHandling(FormValidation.EMPTY);
    } else if (content.length > 250) {
      setFormHandling(FormValidation.TOO_LONG);
    } else {
      publishComment(articleId);
      setIsActive(false);
      setFormHandling(FormValidation.PASSED);
      setContent("");
    }
  };

  return (
    <StyledCreateCommentForm
      onSubmit={(e) => onSubmit(e, addComment)}
      onClick={() => {
        if (!loggedUser) {
          window.alert("You need to be signed in to comment this article!");
        }
      }}
      onBlur={(e: React.MouseEvent<HTMLElement>) =>
        e.relatedTarget === null && setIsActive(false)
      }
    >
      <Avatar />
      <StyledTextArea
        disabled={loggedUser ? false : true}
        onFocus={() => setIsActive(true)}
        placeholder="Join the discussion"
        rows={isActive ? 8 : 1}
        name="comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {isActive && <Button type="submit">Send comment</Button>}
      <ErrorText>{formHandling}</ErrorText>
    </StyledCreateCommentForm>
  );
};

export enum FormValidation {
  EMPTY = "* Comment is empty or too short. Min. length of the text should be 25 characters.",
  TOO_LONG = "* Comment is too long. Maximum is 250 characters.",
  PASSED = "",
}

interface CreateCommentProps {
  articleId: string;
  addComment: (commment: components["schemas"]["Comment"]) => void;
}

export default CreateComment;
