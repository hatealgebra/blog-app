import React from "react";
import LoginForm from "../organisms/forms/LoginForm";
import PageTemplate from "./Page.template";
import { FormContainerTemplate } from "./templates.styled";

const FormPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageTemplate>
      <FormContainerTemplate>{children}</FormContainerTemplate>
    </PageTemplate>
  );
};

export default FormPage;
