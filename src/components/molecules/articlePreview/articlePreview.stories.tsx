import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ArticlePreview from "./ArticlePreview";
import { getImage } from "gatsby-plugin-image";
import ArticlePreviewSmall from "./ArticlePreviewSmall";

export const ArticlePreviewMobile = () => {
  const data = useStaticQuery(graphql`
    query BritishCatQuery {
      allFile(filter: { name: { regex: "/british/i" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <ArticlePreview
      imageId={"kjkjk"}
      title="Article heading"
      author="Random Author"
      createdAt="08/08/2021"
      perex="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro beatae quod qui id dolorum nam, sapiente rem debitis ad illo doloribus ab! Dolorem aliquam facilis labore fugit rem, dolores quasi."
      comments={[{}]}
    />
  );
};

export const ArticlePreviewSmallExample = () => (
  <ArticlePreviewSmall heading="Hello world">Hello there</ArticlePreviewSmall>
);

export default {
  title: "Molecules/Article Preview",
  component: ArticlePreview,
};
