import React from "react";
import { cutTextWithElipsis } from "../../../utils/generic.utils";
import { StyledArticlePreviewSmall } from "./articlePreview.styled";

const ArticlePreviewSmall = ({
  heading,
  children,
}: ArticlePreviewSmallProps) => {
  return (
    <StyledArticlePreviewSmall>
      <h5>{heading}</h5>
      {/* FIXME: Elipsis calculated by number of chars or with css overflow & height> */}
      <p>{cutTextWithElipsis(children, 220)}</p>
    </StyledArticlePreviewSmall>
  );
};

interface ArticlePreviewSmallProps {
  heading: string;
  children: string;
}

export default ArticlePreviewSmall;
