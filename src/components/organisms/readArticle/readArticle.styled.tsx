import styled from "styled-components";

export const ReadArticleContent = styled.article``;

export const ReadArticleContainer = styled.div`
  display: grid;
  padding: 20px 2%;
  max-width: 800px;
  border-bottom: 1px solid ${({ theme }) => theme.color.mono200};
  padding: 30px 0;

  img {
    width: 100%;
    object-fit: cover;
    margin-top: 10px;
  }

  .read-article {
    &__base-info {
      display: flex;
      gap: 10px;
      text-transform: capitalize;
    }
    &__markdown {
      padding: 30px 0 50px 0;
      p {
        line-height: 1.6em;
      }
    }
  }
`;
