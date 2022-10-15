import React from "react";
import styled from "styled-components";

export const FormContainerTemplate = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  width: 100%;
`;

export const NonFormPageContainer = styled.div<{ isArticle?: boolean }>`
  max-width: 1600px;
  height: 100%;
  width: 100%;
  margin: 50px auto;

  ${({ theme }) => theme.breakpoint.laptop} {
    ${({ isArticle }) =>
      isArticle ? "margin: 20px auto;" : "margin: 100px auto;"}
  }
`;

export const StyledArticlePageContainer = styled.div`
  display: grid;
  max-width: 1200px;
  row-gap: 20px;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoint.laptop} {
    grid-template-columns: 3fr 1fr;
    column-gap: 30px;
    grid-template-rows: auto auto auto;
    grid-template-areas: "article related" "article ." "discussion discussion";

    .read-article {
      grid-area: article;
    }
    .related-articles {
      grid-area: related;
      margin-top: 50px;
    }
    .discussion {
      margin-top: 30px;
      grid-area: discussion;
    }
  }

  ${({ theme }) => theme.breakpoint.desktop} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const StyledPageTemplate = styled.div`
  padding: 15px;
  padding-bottom: 50px;

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 15px 5%;
  }
`;
