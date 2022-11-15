import React from "react";
import { components } from "../../../types";
import Checkbox from "../../atoms/checkbox/Checkbox";
import {
  StyledEditArticleRow,
  StyledIconButton,
} from "./editArticleRow.styled";

import { FiEdit2 } from "@react-icons/all-files/fi/FiEdit2";
import { RiDeleteBin7Line } from "@react-icons/all-files/ri/RiDeleteBin7Line";
import { useAppDispatch } from "../../../store/hooks";
import { deleteArticleThunk } from "../../../store/thunks/admin.thunks";
import { deleteArticle } from "../../../services/articlesOperations";

const EditArticleRow = ({
  iteration,
  articleId,
  title,
  perex,
  comments,
  deleteArticle,
  editArticle,
  ...props
}: EditArticleRowProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    props.setCheckedBoxes((prevState) => {
      const newState = prevState || {};
      newState[iteration] = isChecked;
      return newState;
    });
    return () => {};
  }, [isChecked]);

  React.useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

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
      <td className="edit-article__nr-comments">{comments}</td>
      <td className="edit-article__actions-container">
        <div className="edit-article__actions">
          <StyledIconButton onClick={() => editArticle(articleId!)}>
            <FiEdit2 size="1.2em" />
          </StyledIconButton>
          <StyledIconButton onClick={() => deleteArticle(articleId!)}>
            <RiDeleteBin7Line size="1.2em" />
          </StyledIconButton>
        </div>
      </td>
    </StyledEditArticleRow>
  );
};

interface EditArticleRowProps {
  iteration: number;
  articleId?: string;
  title?: string;
  perex?: string;
  comments?: number;
  deleteArticle: Function;
  editArticle: Function;
  isChecked: boolean;
  setCheckedBoxes: React.SetStateAction<any>;
}

export default EditArticleRow;
