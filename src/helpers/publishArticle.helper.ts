import { navigate } from "gatsby";
import React from "react";
import { EPublishArticleErrors } from "../components/organisms/publishArticleForm/PublishArticleForm";
import { createArticle, updateArticle } from "../services/articlesOperations";
import { uploadImage } from "../services/imagesServices";
import { ADMIN_LINKS } from "../utils/contants";
import { cutTextWithElipsis } from "../utils/generic.utils";

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

// FIXME: SentUploadImage only when needed

const publishArticle =
  (
    e: React.FormEvent,
    title: string,
    markdownContent: string,
    imageFile: Blob | string,
    setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>,
    access_token: string
  ) =>
  async (articleOperationFn: any) => {
    console.log("second");
    const trimmedTitle = title.trim();
    const trimmedMarkdownContent = markdownContent.trim();
    const perex = cutTextWithElipsis(trimmedMarkdownContent, 130);

    const formValidationPassed = validatePublishArticleForm(
      trimmedTitle,
      trimmedMarkdownContent,
      imageFile,
      setFormError
    );

    if (formValidationPassed) {
      let formData = new FormData();
      formData.append("image", imageFile!);
      console.log("hi");
      try {
        const uploadImageResponse = await uploadImage(formData);
        console.log(uploadImageResponse);

        articleOperationFn(
          trimmedTitle,
          perex,
          (await uploadImageResponse.data[0].imageId) ?? "",
          trimmedMarkdownContent,
          access_token
        );

        // navigate(ADMIN_LINKS.MY_ARTICLES);
      } catch (e) {}
    }
  };

type articleOperationFnArgs = (
  title: string,
  perex: string,
  imageId: string,
  markdownContent: string,
  access_token: string,
  ...args: any
) => Promise<any>;

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

export default publishArticle;
