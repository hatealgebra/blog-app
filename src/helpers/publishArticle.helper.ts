import { navigate } from "gatsby";
import React from "react";
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
  title: string,
  perex: string,
  content: string,
  imageFile: string | Blob,
  access_token: string,
  ...args: any
) => {
  let formData = new FormData();
  formData.append("image", imageFile!);
  try {
    const uploadImageResponse = await uploadImage(formData);
    const response = createArticle(
      title,
      perex,
      await uploadImageResponse!.data[0].imageId,
      content
    );
    console.log(await response);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const updateArticleHelper = async (
  articleId: string,
  title: string,
  perex: string,
  content: string,
  imageFormData: FormData,
  access_token: string,
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
    return updateArticle(articleId, access_token, { title, perex, content });
  } catch (e) {
    throw e;
  }
};

type TFormHandling = (
  title: string,
  markdownContent: string,
  imageFile: string | Blob,
  setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>
) =>
  | {
      trimmedTitle: string;
      trimmedMarkdownContent: string;
      imageFile: string | Blob;
      perex: string;
    }
  | boolean;
