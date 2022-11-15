import React from "react";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { selectMyArticlesItems } from "../../../store/admin/myArticles.slice";
import { getArticlesFeedThunk } from "../../../store/thunks/articles.thunk";
import { ADMIN_LINKS } from "../../../utils/contants";
import AdminHeading from "../../molecules/adminHeading/AdminHeading";
import EditArticleRow from "../../molecules/editArticleRow/EditArticleRow";
import EditArticleRowButtons from "../../molecules/editArticleRow/EditArticleRowButtons";
import {
  MyArticlesForm,
  MyArticlesTableContainer,
  StyledArticlesTable,
  StyledFallbackContentContainer,
} from "./myArticlesTable.styled";
import {
  selectMyArticlesItems,
  selectMyArticlesOriginalItems,
  selectMyArticlesStatus,
} from "../../../store/slices/admin.slices";
import { components } from "../../../types";

import { deleteArticleThunk } from "../../../store/thunks/admin.thunks";

import noArticles from "../../../images/no-articles.png";
import Loading from "../../atoms/loadingIcon/Loading";

// TODO: Finish the my Articles
// TODO: Add loading of the table
const MyArticlesTable = () => {
  const [checkedBoxes, setCheckedBoxes] = React.useState<boolean[]>([]);
  const originalArray = useAppSelector(selectMyArticlesOriginalItems);
  const articles = useAppSelector(selectMyArticlesItems);
  const status = useAppSelector(selectMyArticlesStatus);
  const dispatch = useAppDispatch();

  const deleteArticle = (articleId: string) =>
    dispatch(
      deleteArticleThunk({ articleId, originalArray, nowSortArray: articles })
    );
  const editArticle = (articleId: string) => {};

  const switchAllBoxes = (isChecked: boolean) => {
    const allBoxesChecked = checkedBoxes.map((value) => true);
    const allBoxesUncheck = checkedBoxes.map((value) => false);
    if (isChecked) {
      return setCheckedBoxes(allBoxesChecked);
    }
    return setCheckedBoxes(allBoxesUncheck);
  };
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
        <StyledArticlesTable>
          <EditArticleRowButtons
            switchAllBoxes={switchAllBoxes}
            dispatch={dispatch}
          />
          {status === "loading" ? (
            <StyledFallbackContentContainer>
              <Loading />
            </StyledFallbackContentContainer>
          ) : articles !== undefined && articles.length > 0 ? (
            articles.map(
              (article: components["schemas"]["ArticleDetail"], i) => {
                const { articleId, title, perex, comments } = article;
                return (
                  <EditArticleRow
                    iteration={i}
                    articleId={articleId}
                    title={title}
                    perex={perex}
                    comments={comments!.length}
                    deleteArticle={deleteArticle}
                    editArticle={editArticle}
                    isChecked={checkedBoxes[i]}
                    setCheckedBoxes={setCheckedBoxes}
                  />
                );
              }
            )
          ) : articles && articles.length === 0 ? (
            <StyledFallbackContentContainer>
              <img src={noArticles} alt="No articles, you should cooksome" />
              <span>No articles written yet, you should cook some!</span>
            </StyledFallbackContentContainer>
          ) : (
            <StyledFallbackContentContainer>
              Error
            </StyledFallbackContentContainer>
          )}
        </StyledArticlesTable>
      </MyArticlesForm>
    </MyArticlesTableContainer>
  );
};

export default MyArticlesTable;
