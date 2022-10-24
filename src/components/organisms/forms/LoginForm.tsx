import React from "react";
import { navigate } from "gatsby";

import authSubmit, {
  ELoginFormValidation,
} from "../../../helpers/login.helper";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { postLoginThunk } from "../../../store/thunks/authentication.thunks";
import Button from "../../atoms/button/Button";
import InputWithLabel from "../../molecules/inputWithLabel/InputWithLabel";
import { StyledLoginForm } from "./forms.styled";
import { navLinks } from "../../../utils/contants";
import { selectAuthToken } from "../../../store/slices/auth.slices";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [formError, setFormError] = React.useState<ELoginFormValidation>(
    ELoginFormValidation.CORRECT_LOGIN
  );

  const auth = useAppSelector(selectAuthToken);
  const dispatch = useAppDispatch();

  const onSubmit = async (
    e: React.FormEvent,
    email: string,
    pwd: string,
    setFormError: React.Dispatch<React.SetStateAction<ELoginFormValidation>>
  ) => {
    if ((await authSubmit(e, email, pwd, setFormError)) !== false) {
      dispatch(postLoginThunk({ email, pwd }));
      setEmail("");
      setPwd("");
      navigate(navLinks.INDEX);
    } else {
      setPwd("");
    }
  };

  return (
    <StyledLoginForm onSubmit={(e) => onSubmit(e, email, pwd, setFormError)}>
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
      <span className="error">{formError}</span>
      <Button type="submit">Log In</Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
