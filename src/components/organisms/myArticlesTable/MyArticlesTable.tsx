import React from "react";
import { API_KEY, USER_CONFIG } from "../../../services/services.config";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { selectMyArticlesItems } from "../../../store/admin/myArticles.slice";
import { getArticlesFeedThunk } from "../../../store/thunks/articles.thunk";
import { ADMIN_LINKS } from "../../../utils/contants";
import AdminHeading from "../../molecules/adminHeading/AdminHeading";
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
  // const articles = useAppSelector(selectMyArticlesItems);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getArticlesFeedThunk());
  }, []);

  return (
    <MyArticlesTableContainer>
      <AdminHeading
        heading="MyArticles"
        buttonText="Create new article"
        to={ADMIN_LINKS.CREATE_ARTICLE}
      />
      <MyArticlesForm onSubmit={(e) => e.preventDefault()}>
        {/* <StyledArticlesTable>
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
        </StyledArticlesTable> */}
      </MyArticlesForm>
    </MyArticlesTableContainer>
  );
};

export default MyArticlesTable;
