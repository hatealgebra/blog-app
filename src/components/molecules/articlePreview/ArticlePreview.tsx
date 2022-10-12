import React from "react";

import { IGatsbyImageData } from "gatsby-plugin-image";
import StyledArticlePreviewContainer, {
  StyledArticlePreviewImage,
  StyledArticleRow,
} from "./articlePreview.styled";

import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot";
import StyledLink from "../../atoms/links/link.styled";
import { components } from "../../../types";

import britishHaircat from "../../../images/british-haircat.jpg";

const ArticlePreview = ({
  imageId,
  title,
  createdAt,
  perex,
  comments,
  author,
}: components["schemas"]["ArticleDetail"] & { author: string }) => {
  return (
    <StyledArticlePreviewContainer className="article-preview">
      <StyledArticlePreviewImage
        className="article-preview__img"
        src={britishHaircat}
        alt={`${title} preview image`}
      />
      <h3 className="article-preview__title">{title}</h3>
      <StyledArticleRow className="article-preview__row-one">
        <span>{author}</span>
        <GoPrimitiveDot />
        <span>{createdAt}</span>
      </StyledArticleRow>
      <p className="article-preview__text">{perex}</p>
      <StyledArticleRow className="article-preview__row-two">
        <StyledLink to="#">Read whole article</StyledLink>
        <span>{`${comments!.length} comments`}</span>
      </StyledArticleRow>
    </StyledArticlePreviewContainer>
  );
};

export default ArticlePreview;
