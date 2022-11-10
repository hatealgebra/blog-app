import React, { FormEvent } from "react";
import AdminHeading from "../../molecules/adminHeading/AdminHeading";
import MarkdownEditor from "../../atoms/markdownEditor/MarkdownEditor";
import InputWithLabel from "../../molecules/inputWithLabel/InputWithLabel";
import UploadImage from "../../molecules/uploadImage/UploadImage";
import { StyledPublishArticleForm } from "./publishArticleForm.styled";
import { ErrorText } from "../../atoms/errorText/error.styled";
import { useAppSelector } from "../../../store/hooks";

import { selectAuthToken } from "../../../store/slices/auth.slices";
import publishArticle, {
  createArticleHelper,
  updateArticleHelper,
} from "../../../helpers/publishArticle.helper";

// FIXME: maybe implement do BIG notation?
// TODO: Mock for MSW
// TODO: Testing
// FIXME: When editing the article, get the loading screen maybe?
const PublishArticleForm = ({
  titleValue,
  markdownContentValue,
  imageFileValue,
  onSubmit,
  ...props
}: PublistArticleFormProps) => {
  const access_token = useAppSelector(selectAuthToken);
  const [title, setTitle] = React.useState("New article title");
  const [markdownContent, setMarkdownContent] = React.useState(
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
  );
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [isImageChanged, setIsImageChanged] = React.useState(false);
  const [formError, setFormError] = React.useState<EPublishArticleErrors>(
    EPublishArticleErrors.PASSED
  );

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    publishArticle(
      e,
      title,
      markdownContent,
      imageFile,
      isImageChanged,
      setFormError,
      access_token
    )(onSubmit);
  };

  React.useEffect(() => {
    setIsImageChanged(true);
  }, [setImageFile]);

  React.useEffect(() => {
    setTitle((prevState) => titleValue ?? prevState);
    setMarkdownContent((prevState) => markdownContentValue ?? prevState);
    setImageFile((prevState) => imageFileValue || prevState);
  }, [titleValue, markdownContentValue, imageFileValue]);

  return (
    <StyledPublishArticleForm onSubmit={(e) => handleOnSubmit(e)}>
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
  onSubmit: typeof updateArticleHelper | typeof createArticleHelper;
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
