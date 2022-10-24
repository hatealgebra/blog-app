import React from "react";
import Avatar from "../../atoms/avatar/Avatar";
import Button from "../../atoms/button/Button";
import { ErrorText } from "../../atoms/errorText/error.styled";
import { StyledTextArea } from "../../atoms/input/input.styled";
import { StyledCreateCommentForm } from "./createComment.styled";

const CreateComment = ({ dispatch, avatar }: CreateCommentProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [formHandling, setFormHandling] = React.useState<FormValidation>(
    FormValidation.PASSED
  );

  const onSubmit = (
    e: React.FormEvent,
    dispatch: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    if (textAreaValue.length < 25) {
      setFormHandling(FormValidation.EMPTY);
    } else if (textAreaValue.length > 250) {
      setFormHandling(FormValidation.TOO_LONG);
    } else {
      setIsActive(false);
      dispatch(textAreaValue);
      setFormHandling(FormValidation.PASSED);
      setTextAreaValue("");
    }
  };

  return (
    <StyledCreateCommentForm
      onSubmit={(e) => onSubmit(e, dispatch)}
      onBlur={(e: React.MouseEvent<HTMLElement>) =>
        e.relatedTarget === null && setIsActive(false)
      }
    >
      <Avatar />
      <StyledTextArea
        onFocus={() => setIsActive(true)}
        placeholder="Join the discussion"
        rows={isActive ? 8 : 1}
        name="comment"
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
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
  dispatch: React.Dispatch<React.SetStateAction<string>>;
  avatar?: string;
}

export default CreateComment;
