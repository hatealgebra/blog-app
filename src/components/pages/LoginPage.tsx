import React from "react";
import LoginForm from "../organisms/forms/LoginForm";
import FormPageTemplate from "../templates/FormPage.template";

const LoginPage = () => {
  return (
    <FormPageTemplate>
      <LoginForm />
    </FormPageTemplate>
  );
};

export default LoginPage;
