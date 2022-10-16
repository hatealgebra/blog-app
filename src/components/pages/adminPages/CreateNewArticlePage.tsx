import React from "react";
import AdminHeading from "../../adminHeading/AdminHeading";
import PageTemplate from "../../templates/Page.template";

const CreateNewArticlePage = () => {
  return (
    <PageTemplate>
      <AdminHeading
        heading="Create new article"
        buttonText="Publish article"
        onClick={() => console.log("hy")}
      />
    </PageTemplate>
  );
};

export default CreateNewArticlePage;
