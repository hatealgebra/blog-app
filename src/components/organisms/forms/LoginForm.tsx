import axios from "axios";
import React, { FormEvent } from "react";
import loginUser from "../../../helpers/login.helper";
import { ADMIN_CONFIG } from "../../../services/admin";
import { emailValidation, pwdValidation } from "../../../utils/regex.utils";
import Button from "../../atoms/button/Button";
import InputWithLabel from "../../molecules/inputWithLabel/InputWithLabel";
import { StyledLoginForm } from "./forms.styled";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [validation, setValidation] = React.useState("");

  const onSubmit = (e: FormEvent, email: string, pwd: string) => {
    e.preventDefault();
    const emailTrim = email.trim();
    const pwdTrim = pwd.trim();
    if (emailTrim.length === 0 || !emailValidation(emailTrim)) {
      setValidation(LoginFormValidation.INVALID_EMAIL);
    } else if (!pwdValidation(pwdTrim)) {
      setValidation(LoginFormValidation.EMPTY_PASSWORD);
    } else {
      loginUser(emailTrim, pwdTrim);
    }
  };

  return (
    <StyledLoginForm onSubmit={(e) => onSubmit(e, email, pwd)}>
      <h3>Log In</h3>
      <InputWithLabel
        label="Email"
        placeholder="me@example.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithLabel
        label="Password"
        placeholder="Enter the password"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <span className="error">{validation}</span>
      <Button type="submit">Log In</Button>
    </StyledLoginForm>
  );
};

enum LoginFormValidation {
  INVALID_EMAIL = "Email should be in this format: email@example.com. Please check it.",
  EMAIL_NOT_FOUND = "Login with this email does not exist.",
  EMPTY_PASSWORD = "Password field is empty. Please check it",
  INCORRECT_LOGIN = "Incorrect login.",
}

export default LoginForm;