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

// FIXME: Max char at the heading
const ArticlePreview = ({
  articleId,
  imageId,
  title,
  createdAt,
  perex,
  comments,
  author,
}: components["schemas"]["ArticleDetail"] & { author: string }) => {
  const [image, setImage] = React.useState(null);
  const createdDate = getDate(createdAt);

  React.useEffect(() => {
    const getBlob = async (imageId: string) => {
      try {
        const { data } = await showImage(imageId!);
        const result = await data;
        console.log(URL.createObjectURL(result));
        setImage(URL.createObjectURL(result));
      } catch (e) {
        console.log(e);
      }
    };

    getBlob(imageId!);
  }, [imageId]);

  return (
    <StyledArticlePreviewContainer className="article-preview">
      <StyledArticlePreviewImage
        className="article-preview__img"
        src={image}
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
