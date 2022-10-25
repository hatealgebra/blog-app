import { Story } from "@storybook/react";
import React from "react";

import createArticleSubmit from "../../../helpers/createArticleSubmit.helper";
import { useAppDispatch } from "../../../store/hooks";
import { postLoginThunk } from "../../../store/thunks/authentication.thunks";
import PublishArticleForm from "./PublishArticleForm";

export const CreateNewArticleFormExample = () => {
  const dispatch = useAppDispatch();
  dispatch(
    postLoginThunk({
      email: "contact@pavel-vondra.com",
      pwd: "Applifting123",
    })
  );
  return <PublishArticleForm onSubmit={createArticleSubmit} />;
};
// export const EditArticleFormExample = () => <EditArticleForm />;

export default {
  title: "Organisms/Forms",
  component: PublishArticleForm,
};
