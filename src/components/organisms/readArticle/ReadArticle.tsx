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
  const articlePublishedFormat = new Date(createdAt!)
    .toLocaleString()
    .split(" ")
    .slice(0, -1)
    .join(" ");
  return (
    <ReadArticleContainer className="read-article">
      <h1>{title}</h1>
      <div className="read-article__base-info label">
        <span className="read-article__author">{author}</span>
        <span>•</span>
        <span className="read-article__date">{articlePublishedFormat}</span>
      </div>
      <img src={britishCat} alt={`${title} image`} />
      <ReadArticleContent className="read-article__markdown">
        <ReactMarkdown children={content!} />
      </ReadArticleContent>
    </ReadArticleContainer>
  );
};

export default ReadArticle;
