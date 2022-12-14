import React from "react";

import ArticlePreview from "./ArticlePreview";
import ArticlePreviewSmall from "./ArticlePreviewSmall";

export const ArticlePreviewMobile = () => {
  return (
    <ArticlePreview
      imageBase64={""}
      title="Article heading"
      author="Random Author"
      createdAt="08/08/2021"
      perex="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro beatae quod qui id dolorum nam, sapiente rem debitis ad illo doloribus ab! Dolorem aliquam facilis labore fugit rem, dolores quasi."
      comments={[{}]}
    />
  );
};
export const ArticlePreviewLongTitle = () => (
  <ArticlePreview
    imageBase64={""}
    title="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    author="Random Author"
    createdAt="08/08/2021"
    perex="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro beatae quod qui id dolorum nam, sapiente rem debitis ad illo doloribus ab! Dolorem aliquam facilis labore fugit rem, dolores quasi."
    comments={[{}]}
  />
);

export const ArticlePreviewSmallExample = () => (
  <ArticlePreviewSmall heading="Hello world">Hello there</ArticlePreviewSmall>
);

export default {
  title: "Molecules/Article Preview",
  component: ArticlePreview,
};
