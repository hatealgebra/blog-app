import React from "react";

import createArticleSubmit from "../../../helpers/createArticleSubmit.helper";
import PublishArticleForm from "./PublishArticleForm";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio nesciunt at asperiores cumque quis, enim, ratione repellendus aliquam perferendis nihil atque facere adipisci nulla neque vel beatae eaque eos. lorem onsectetur adipisicing elit. Voluptatum optio nesciunt at asperiores cumque quis, enim, ratione repellendus aliquam perferendis nihil atque facere adipisci nulla neque vel beatae eaqu";

export const CreateNewArticleFormExample = () => {
  return (
    <PublishArticleForm
      markdownContentValue={lorem}
      onSubmit={createArticleSubmit}
    />
  );
};
// export const EditArticleFormExample = () => <EditArticleForm />;

export default {
  title: "Organisms/Forms",
  component: PublishArticleForm,
};
