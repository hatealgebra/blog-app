import React from "react";
import { components } from "../../../types";
import { ReadArticleContainer, ReadArticleContent } from "./readArticle.styled";

import ReactMarkdown from "react-markdown";

import britishCat from "../../../images/british-haircat.jpg";

const ReadArticle = ({
  title,
  imageId,
  author,
  createdAt,
  content,
}: components["schemas"]["ArticleDetail"] & { author: string }) => {
  return (
    <ReadArticleContainer className="read-article">
      <h1>{title}</h1>
      <div className="read-article__base-info label">
        <span>{author}</span>
        <span>•</span>
        <span>{createdAt}</span>
      </div>
      <img src={britishCat} alt={`${title} image`} />
      <ReadArticleContent className="read-article__markdown">
        <ReactMarkdown children={content!} />
      </ReadArticleContent>
    </ReadArticleContainer>
  );
};

export default ReadArticle;
