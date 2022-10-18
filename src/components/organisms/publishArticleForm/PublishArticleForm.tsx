import React from "react";
import createArticleSubmit from "../../../helpers/createArticleSubmit.helper";
import AdminHeading from "../../adminHeading/AdminHeading";
import MarkdownEditor from "../../atoms/markdownEditor/MarkdownEditor";
import InputWithLabel from "../../molecules/inputWithLabel/InputWithLabel";
import UploadImage from "../../molecules/uploadImage/UploadImage";
import { StyledPublishArticleForm } from "./publishArticleForm.styled";

const PublishArticleForm = ({
  titleValue,
  markdownContentValue,
  imageFileValue,
  onSubmit,
}: PublistArticleFormProps) => {
  const [title, setTitle] = React.useState(titleValue ?? "");
  const [markdownContent, setMarkdownContent] = React.useState(
    markdownContentValue ?? ""
  );
  const [imageFile, setImageFile] = React.useState<File | null>(
    imageFileValue === undefined ? null : imageFileValue
  );
  const [formError, setFormError] = React.useState<EPublishArticleErrors>(
    EPublishArticleErrors.PASSED
  );

  return (
    <StyledPublishArticleForm
      onSubmit={(e) =>
        onSubmit(e, title, markdownContent, imageFile, setFormError)
      }
    >
      <AdminHeading
        heading="Create new article"
        buttonText="Publish article"
        isFormPage
      />
      <InputWithLabel
        label="Article title"
        value={title}
        onChange={setTitle}
        placeholder="My new article"
      />
      <UploadImage image={imageFile} setImage={setImageFile} />
      <MarkdownEditor value={markdownContent} onChange={setMarkdownContent} />
      <span className="label"></span>
    </StyledPublishArticleForm>
  );
};

export interface PublistArticleFormProps {
  titleValue?: string;
  markdownContentValue?: string;
  imageFileValue?: File | null;
  onSubmit: (
    e: React.FormEvent,
    title: string,
    markdownContent: string,
    imageFile: File | null,
    setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>
  ) => void;
}

export enum EPublishArticleErrors {
  TITLE_EMPTY = "Title cannot be empty!",
  IMAGE_EMPTY = "Image is mandatory. Please, choose and upload the image.",
  MARKDOWN_EMPY = "Content cannot be empty!",
  MARKDOWN_TOO_SHORT = "Content is too short. Atleast 250 chars are needed",
  PASSED = "",
  UNEXPECTED_ERROR = "Sorry, but there was unexpected error. Please contact our support team!",
}

export default PublishArticleForm;
