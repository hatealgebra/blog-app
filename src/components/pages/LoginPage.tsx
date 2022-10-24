import React from "react";
import authSubmit from "../../helpers/login.helper";
import LoginForm, { TLoginSubmit } from "../organisms/forms/LoginForm";
import FormPageTemplate from "../templates/FormPage.template";

const LoginPage = () => {
  return (
    <FormPageTemplate>
      <LoginForm />
    </FormPageTemplate>
  );
};

export default LoginPage;
