import React from "react";

import StyledArticlePreviewContainer, {
  StyledArticlePreviewImage,
  StyledArticleRow,
} from "./articlePreview.styled";

import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot";
import StyledLink from "../../atoms/links/link.styled";
import { components } from "../../../types/declarations";

import { getDate } from "../../../utils/date.utils";
import { showImage } from "../../../services/imagesServices";

import { Buffer } from "buffer";

// FIXME: Max char at the heading
const ArticlePreview = ({
  articleId,
  imageId,
  title,
  createdAt,
  perex,
  comments,
  imageBlob,
  author,
}: components["schemas"]["ArticleDetail"] & { author: string }) => {
  const [image, setImage] = React.useState<null | string>(null);
  const createdDate = getDate(createdAt);

  const file = "data:image/png;base64," + imageBlob;
  React.useEffect(() => {
    const getBlob = async (imageId: string) => {
      try {
      } catch (e) {
        console.log(e);
      }
    };

    getBlob(imageId!);
    // const base64 = Buffer.from(imageBlob, "base64");
    console.log(image);
  }, [imageId]);

  return (
    <StyledArticlePreviewContainer className="article-preview">
      <StyledArticlePreviewImage
        className="article-preview__img"
        src={file}
        alt={`${title} preview image`}
      />
      <h3 className="article-preview__title">{title}</h3>
      <StyledArticleRow className="article-preview__row-one">
        <span>{author}</span>
        <GoPrimitiveDot />
        <span>{createdDate}</span>
      </StyledArticleRow>
      <p className="article-preview__text">{perex}</p>
      <StyledArticleRow className="article-preview__row-two">
        <StyledLink to={`/articles/${articleId}`}>
          Read whole article
        </StyledLink>
        <span>{`${comments?.length || "0"} comments`}</span>
      </StyledArticleRow>
    </StyledArticlePreviewContainer>
  );
};

export default ArticlePreview;
