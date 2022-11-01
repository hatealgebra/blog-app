import React from "react";
import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { createArticle } from "../services/articlesOperations";
import { uploadImage } from "../services/imagesServices";
import { useAppSelector } from "../store/hooks";
import { selectAuthToken } from "../store/slices/auth.slices";

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

const createArticleSubmit = async (
  e: React.FormEvent,
  title: string,
  markdownContent: string,
  imageFile: File | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>,
  access_token: string
): Promise<void> => {
  const trimmedTitle = title;
  const trimmedMarkdownContent = markdownContent;
  const perex = trimmedMarkdownContent
    .split("")
    .splice(0, 160)
    .concat("...")
    .join("");
  const formHandling = checkCreateArticleFormInput(
    trimmedTitle,
    trimmedMarkdownContent,
    imageFile,
    setFormError,
    access_token
  );

  if (formHandling) {
    try {
      const imageResponse = await uploadImage(imageFile!);
      // createArticle(
      //   trimmedTitle,
      //   perex,
      //   imageResponse.data.imageId,
      //   trimmedMarkdownContent,
      //   access_token!
      // );
    } catch (e) {
      console.log(e);
    }
  }
};

type TFormHandling = (
  title: string,
  markdownContent: string,
  imageFile: File | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>,
  access_token: string | undefined
) => boolean | void;

export default createArticleSubmit;
