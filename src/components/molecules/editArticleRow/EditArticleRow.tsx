import React, { Dispatch } from "react";
import { components } from "../../../types";
import Checkbox from "../../atoms/checkbox/Checkbox";
import {
  StyledEditArticleRow,
  StyledIconButton,
} from "./editArticleRow.styled";

import { FiEdit2 } from "@react-icons/all-files/fi/FiEdit2";
import { RiDeleteBin7Line } from "@react-icons/all-files/ri/RiDeleteBin7Line";

const EditArticleRow = ({
  articleId,
  title,
  perex,
  comments,
  dispatch,
}: components["schemas"]["Article"] &
  components["schemas"]["ArticleDetail"] & {
    dispatch: Dispatch<string>;
  }) => {
  console.log(comments);
  const [isChecked, setIsChecked] = React.useState(false);
  const editArticle = () => {};

  const deleteArticle = () => {};

  React.useEffect(() => {
    dispatch();
  }, [setIsChecked]);

  return (
    <StyledEditArticleRow className="edit-article">
      <td className="edit-article__checkbox">
        <Checkbox
          isChecked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
      </td>
      <td className="edit-article__title">{title}</td>
      <td className="edit-article__perex">{perex}</td>
      <td className="edit-article__author">author</td>
      <td className="edit-article__nr-comments">
        {(comments && comments.length) || "0"}
      </td>
      <td className="edit-article__actions-container">
        <div className="edit-article__actions">
          <StyledIconButton onClick={() => editArticle()}>
            <FiEdit2 size="1.2em" />
          </StyledIconButton>
          <StyledIconButton onClick={() => deleteArticle()}>
            <RiDeleteBin7Line size="1.2em" />
          </StyledIconButton>
        </div>
      </td>
    </StyledEditArticleRow>
  );
};

export default EditArticleRow;
