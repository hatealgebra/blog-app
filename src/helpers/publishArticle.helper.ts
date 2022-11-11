import { navigate } from "gatsby";
import React, { FormEvent } from "react";
import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { createArticle, updateArticle } from "../services/articlesOperations";

import { uploadImage } from "../services/imagesServices";
import { ADMIN_LINKS } from "../utils/contants";

export const validatePublishArticleForm: TFormHandling = (
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

export const createArticleHelper = async (
  e: FormEvent,
  title: string,
  perex: string,
  content: string,
  imageFormData: FormData
) => {
  try {
    const uploadImageResponse = await uploadImage(imageFormData);
    const response = createArticle(
      title,
      perex,
      await uploadImageResponse!.data[0].imageId,
      content
    );
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const updateArticleHelper = async (
  e: FormEvent,
  articleId: string,
  title: string,
  perex: string,
  content: string,
  imageFormData: FormData,
  access_token: string | undefined,
  isImageChanged: boolean
) => {
  try {
    if (isImageChanged) {
      const uploadImageResponse = await uploadImage(imageFormData);
      return updateArticle(articleId, access_token, {
        title,
        perex,
        imageId: await uploadImageResponse!.data[0].imageId,
        content,
      });
    }
    updateArticle(articleId, access_token, { title, perex, content });
    return navigate(ADMIN_LINKS.MY_ARTICLES);
  } catch (e) {
    throw e;
  }
};

type TFormHandling = (
  title: string,
  markdownContent: string,
  imageFile: string | Blob | null,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>
) =>
  | {
      trimmedTitle: string;
      trimmedMarkdownContent: string;
      imageFile: string | Blob;
      perex: string;
    }
  | boolean;
