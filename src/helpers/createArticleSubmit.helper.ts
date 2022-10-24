import React from "react";
import randomize from "randomatic";
import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { postImage } from "../services/images/imagesPOST";

export const checkCreateArticleFormInput: TFormHandling = (
  title,
  markdownContent,
  imageFile,
  setFormError
) => {
  const {
    TITLE_EMPTY,
    IMAGE_EMPTY,
    MARKDOWN_EMPY,
    MARKDOWN_TOO_SHORT,
    UNEXPECTED_ERROR,
    PASSED,
  } = EPublishArticleErrors;
  if (title === "") {
    setFormError(TITLE_EMPTY);
    return false;
  } else if (markdownContent === "") {
    setFormError(MARKDOWN_EMPY);
    return false;
  } else if (markdownContent.length < 250) {
    setFormError(MARKDOWN_TOO_SHORT);
    return false;
  } else if (imageFile === null) {
    setFormError(IMAGE_EMPTY);
    return false;
  } else if (
    title !== "" &&
    imageFile !== null &&
    markdownContent.length >= 250
  ) {
    setFormError(PASSED);
    return true;
  } else {
    setFormError(UNEXPECTED_ERROR);
    return false;
  }
};

const createArticleSubmit = (
  e: React.FormEvent,
  title: string,
  markdownContent: string,
  imageFile: File | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>,
  apiKey: string,
  acessToken: string
): void => {
  e.preventDefault();
  const randomId = randomize("Aa0!", 20);
  const trimmedTitle = title;
  const trimmedMarkdownContent = markdownContent;
  const perex = trimmedMarkdownContent
    .split("")
    .splice(0, 160)
    .concat("...")
    .join("");

  const dateTimeNow = new Date().toLocaleString();
  const formHandling = checkCreateArticleFormInput(
    trimmedTitle,
    trimmedMarkdownContent,
    imageFile,
    setFormError
  );
  if (formHandling) {
    try {
      console.log(postImage(imageFile!, apiKey, acessToken));
    } catch (e) {}
  }
};

type TFormHandling = (
  title: string,
  markdownContent: string,
  imageFile: File | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>
) => boolean | void;

export default createArticleSubmit;
