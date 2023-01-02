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
import {
  createArticleLink,
  cutTextWithElipsis,
} from "../../../utils/generic.utils";

// FIXME: Max char at the heading
// TODO: Fallback image
const ArticlePreview = ({
  articleId,
  title,
  createdAt,
  perex,
  comments,
  imageBase64,
  author,
}: components["schemas"]["ArticleDetail"] & {
  author: string;
  imageBase64: String;
}) => {
  const createdDate = getDate(createdAt);
  const file = "data:image/png;base64," + imageBase64;
  const commentsArray = JSON.parse(comments);

  return (
    <StyledArticlePreviewContainer className="article-preview">
      <StyledArticlePreviewImage
        className="article-preview__img"
        src={file}
        alt={`${title} preview image`}
      />
      <h3 className="article-preview__title">
        {cutTextWithElipsis(title, 50)}
      </h3>
      <StyledArticleRow className="article-preview__row-one">
        <span>{author ?? "Unknown author"}</span>
        <GoPrimitiveDot />
        <span>{createdDate}</span>
      </StyledArticleRow>
      <p className="article-preview__text">{perex}</p>
      <StyledArticleRow className="article-preview__row-two">
        <StyledLink to={createArticleLink(articleId)}>
          Read whole article
        </StyledLink>
        <span>{`${commentsArray?.length || "0"} comments`}</span>
      </StyledArticleRow>
    </StyledArticlePreviewContainer>
  );
};

export default ArticlePreview;
