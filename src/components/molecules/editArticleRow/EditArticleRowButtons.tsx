import React, { Dispatch } from "react";
import { components } from "../../../types";
import Checkbox from "../../atoms/checkbox/Checkbox";
import {
  StyledEditArticleRow,
  StyledIconButton,
} from "./editArticleRow.styled";

import { FiEdit2 } from "@react-icons/all-files/fi/FiEdit2";
import { RiDeleteBin7Line } from "@react-icons/all-files/ri/RiDeleteBin7Line";
import ButtonSort from "../../atoms/button/ButtonSort";
import { enumDefaultedMember } from "@babel/types";
import { useAppDispatch } from "../../../store/hooks";

const EditArticleRowButtons = ({
  // setCheckAll,
  dispatchEdit,
  dispatchDelete,
  dispatchSort,
}: EditArticleRowButtonsProp) => {
  const { BY_TITLE, BY_AUTHOR, BY_NR_COMMENTS, BY_PEREX, ORIGINAL } =
    ESortByOptions;
  const [isChecked, setIsChecked] = React.useState(false);
  const [isActive, setIsActive] = React.useState<ESortByOptions>(ORIGINAL);
  const dispatch = useAppDispatch();

  const editArticle = () => {};

  const deleteArticle = () => {};

  const activeSort = (sortType: ESortByOptions) => {
    setIsActive((prev) => {
      if (prev === sortType) {
        dispatchSort({ type: "myArticles/sortMyArticles", payload: ORIGINAL });
        return ORIGINAL;
      }
      dispatchSort({ type: "myArticles/sortMyArticles", payload: sortType });
      return sortType;
    });
  };

  React.useEffect(() => {
    // setCheckAll();
  }, [setIsChecked]);

  return (
    <StyledEditArticleRow className="edit-article">
      <th className="edit-article__checkbox">
        <Checkbox
          isChecked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
      </th>
      <th className="edit-article__title">
        <ButtonSort
          isActive={isActive === BY_TITLE}
          onClick={() => activeSort(BY_TITLE)}
        >
          Article title
        </ButtonSort>
      </th>
      <th className="edit-article__perex">
        <ButtonSort
          isActive={isActive === BY_PEREX}
          onClick={() => activeSort(BY_PEREX)}
        >
          Perex
        </ButtonSort>
      </th>
      <th className="edit-article__author">
        <ButtonSort
          isActive={isActive === BY_AUTHOR}
          onClick={() => activeSort(BY_AUTHOR)}
        >
          Author
        </ButtonSort>
      </th>
      <th className="edit-article__nr-comments">
        <ButtonSort
          isActive={isActive === BY_NR_COMMENTS}
          onClick={() => activeSort(BY_NR_COMMENTS)}
        >
          # of comments
        </ButtonSort>
      </th>
      <th className="edit-article__actions-container">Actions</th>
    </StyledEditArticleRow>
  );
};

export enum ESortByOptions {
  ORIGINAL = "original",
  BY_TITLE = "title",
  BY_PEREX = "perex",
  BY_AUTHOR = "author",
  BY_NR_COMMENTS = "comments",
}

interface EditArticleRowButtonsProp {
  // setCheckAll: Function;
  dispatchSort: Function;
  dispatchEdit: Function;
  dispatchDelete: Function;
}

export default EditArticleRowButtons;
