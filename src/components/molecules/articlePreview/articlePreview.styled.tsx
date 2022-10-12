import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

const StyledArticlePreviewContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  .article-preview {
    &__heading {
      margin: 15px 0;
    }
  }

  ${({ theme }) => `${theme.breakpoint.tablet} {
        display: grid;
    grid-template-columns: 244px auto;
    grid-template-rows: repeat(4,auto) 70px;
    grid-column-gap: 20px;

    
    .article-preview{
        &__img{
            grid-column: 1/2;
            grid-row: 1/6;
        }
        &__title {
          margin: 0 0 10px 0;
          grid-column: 2/4;
        }
        &__heading, &__row-one, &__row-two, &__text {
            grid-column: 2/3;
        }
    }

    }`}
`;

export const StyledArticlePreviewImage = styled.img`
  box-shadow: ${({ theme }) => theme.shadow.border_shadow};
  width 100%;
  object-fit: cover;
  height: 100%;
`;

export const StyledArticleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.typography.size.label};
  color: ${({ theme }) => theme.color.secondary};
`;

export const StyledArticlePreviewSmall = styled.div`
  max-width: 400px;

  h5 {
    margin: 0;
  }
`;

export default StyledArticlePreviewContainer;
