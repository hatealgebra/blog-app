import React from "react";
import randomize from "randomatic";
import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { postImage } from "../services/images/imagesPOST";
import { ADMIN_CONFIG } from "../services/admin";

const checkCreateArticleFormInput: TFormHandling = (
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
  } = EPublishArticleErrors;
  if (title === "") {
    setFormError(TITLE_EMPTY);
    return false;
  } else if (imageFile === null) {
    setFormError(IMAGE_EMPTY);
  } else if (markdownContent === "") {
    setFormError(MARKDOWN_EMPY);
  } else if (markdownContent.length < 250) {
    setFormError(MARKDOWN_TOO_SHORT);
  } else if (
    title !== "" &&
    imageFile !== null &&
    markdownContent.length >= 250
  ) {
    return true;
  } else {
    setFormError(UNEXPECTED_ERROR);
  }
  return false;
};

const createArticleSubmit = (
  e: React.FormEvent,
  title: string,
  markdownContent: string,
  imageFile: File | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>
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
  // console.log(postImage(imageFile, ADMIN_CONFIG.API_KEY));
  if (formHandling) {
    try {
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
