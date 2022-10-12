import React from "react";
import styled from "styled-components";

export const StyledCommentCounter = styled.div.attrs(() => ({
  className: "comment__voting-counter",
}))`
  display: flex;
  align-items: center;
  align-content: center;

  * {
    padding: 0 5px;
  }
  span {
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    border-right: ${({ theme }) => `1px solid ${theme.color.mono200}`};
    min-width: 40px;
  }

  button {
    display: inline-block;
    border: none;
    border-right: ${({ theme }) => `1px solid ${theme.color.mono200}`};
    background-color: transparent;
    cursor: pointer;
    height: 20px;
    svg {
      margin: auto;
      transform: scale(1.5);
    }
  }
`;

export const StyledCommentContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto auto 1fr;
  column-gap: 10px;
  justify-items: flex-start;
  align-items: center;
  grid-template-areas:
    "avatar author timestamp"
    ". text text"
    ". counter counter";
  max-width: 650px;

  img {
    grid-area: avatar;
    margin-right: 10px;
    position: relative;
    top: 10px;
  }
  .comment {
    &__author {
      grid-area: author;
      margin: 0;
    }
    &__time-diff {
      grid-area: timestamp;
    }
    &__text {
      grid-area: text;
    }
    &__voting-counter {
      grid-area: counter;
    }
  }
`;
