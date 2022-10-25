import React from "react";
import AdminHeading from "../../molecules/adminHeading/AdminHeading";
import MarkdownEditor from "../../atoms/markdownEditor/MarkdownEditor";
import InputWithLabel from "../../molecules/inputWithLabel/InputWithLabel";
import UploadImage from "../../molecules/uploadImage/UploadImage";
import { StyledPublishArticleForm } from "./publishArticleForm.styled";
import { ErrorText } from "../../atoms/errorText/error.styled";
import { useAppSelector } from "../../../store/hooks";
import { selectAuthToken } from "../../../store/slices/auth.slices";
import { access } from "fs";

// TODO: BETTER ERROR HANDLING, make formError object instead basic string
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
  const { access_token } = useAppSelector(selectAuthToken);

  return (
    <StyledPublishArticleForm
      onSubmit={(e) => {
        onSubmit(
          e,
          title,
          markdownContent,
          imageFile,
          setFormError,
          access_token!
        );
      }}
    >
      <AdminHeading
        heading="Create new article"
        buttonText="Publish article"
        isFormPage
      />
      <div>
        <InputWithLabel
          label="Article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="My new article"
        />
        <ErrorText>
          {formError === EPublishArticleErrors.TITLE_EMPTY &&
            EPublishArticleErrors.TITLE_EMPTY}
        </ErrorText>
      </div>
      <div>
        <UploadImage image={imageFile} setImage={setImageFile} />
        <ErrorText>
          {formError === EPublishArticleErrors.IMAGE_EMPTY &&
            EPublishArticleErrors.IMAGE_EMPTY}
        </ErrorText>
      </div>
      <div>
        <MarkdownEditor value={markdownContent} onChange={setMarkdownContent} />
        <ErrorText>
          {formError === EPublishArticleErrors.MARKDOWN_EMPY
            ? EPublishArticleErrors.MARKDOWN_EMPY
            : formError === EPublishArticleErrors.MARKDOWN_TOO_SHORT
            ? EPublishArticleErrors.MARKDOWN_TOO_SHORT
            : ""}
        </ErrorText>
      </div>
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
    setFormError: React.Dispatch<React.SetStateAction<EPublishArticleErrors>>,
    acessToken: string
  ) => void;
}

export enum EPublishArticleErrors {
  TITLE_EMPTY = "* Title cannot be empty!",
  IMAGE_EMPTY = "* Image is mandatory. Please, choose and upload the image.",
  MARKDOWN_EMPY = "* Content cannot be empty!",
  MARKDOWN_TOO_SHORT = "* Content is too short. Atleast 250 chars are needed",
  UNEXPECTED_ERROR = "* Sorry, but there was unexpected error. Please contact our support team!",
  PASSED = "",
}

export default PublishArticleForm;
