import React from "react";
import MyArticlesTable from "../../organisms/myArticlesTable/MyArticlesTable";
import PageTemplate from "../../templates/Page.template";

const MyArticlesPage = () => {
  return (
    <PageTemplate>
      <MyArticlesTable />
    </PageTemplate>
  );
};

export default MyArticlesPage;
