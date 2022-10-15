import React from "react";

import { ADMIN_CONFIG } from "../../../services/admin";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectMyArticlesItems } from "../../../store/slices/myArticles.slice";
import { getMyArticles } from "../../../store/thunks/articles.thunk";
import { ADMIN_LINKS } from "../../../utils/contants";
import AdminHeading from "../../adminHeading/AdminHeading";
import Button from "../../atoms/button/Button";
import EditArticleRow from "../../molecules/editArticleRow/EditArticleRow";
import EditArticleRowButtons from "../../molecules/editArticleRow/EditArticleRowButtons";
import {
  MyArticlesForm,
  MyArticlesTableContainer,
  StyledArticlesTable,
} from "./myArticlesTable.styled";

// TODO: Finish the my Articles

const MyArticlesTable = () => {
  const articles = useAppSelector(selectMyArticlesItems);
  const dispatch = useAppDispatch();

  console.log(articles);

  React.useEffect(() => {
    dispatch(getMyArticles(ADMIN_CONFIG.API_KEY));
  }, []);

  return (
    <MyArticlesTableContainer>
      <AdminHeading
        heading="MyArticles"
        buttonText="Create new article"
        to={ADMIN_LINKS.CREATE_ARTICLE}
      />
      <MyArticlesForm onSubmit={(e) => e.preventDefault()}>
        <StyledArticlesTable>
          <EditArticleRowButtons
            dispatchSort={dispatch}
            // setCheckAll={console.log("hey")}
          />
          {articles !== undefined && articles.length > 0
            ? articles.map((article) => {
                const { articleId, title, perex, comments } = article;
                return (
                  <EditArticleRow
                    articleId={articleId}
                    title={title}
                    perex={perex}
                    dispatch={() => console.log("article")}
                  />
                );
              })
            : articles && articles.length === 0
            ? "No articles to show"
            : "nothing"}
        </StyledArticlesTable>
      </MyArticlesForm>
    </MyArticlesTableContainer>
  );
};

export default MyArticlesTable;
