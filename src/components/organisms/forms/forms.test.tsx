import React from "react";
import { setupTest } from "../../../utils/testing.utils";
import LoginForm from "./LoginForm";

describe("Login form testing", () => {
  let emailInput, pwdInput, submitButton;
  beforeEach(() => {
    const { getByPlaceholderText, getByRole } = setupTest(<LoginForm />);
    emailInput = getByPlaceholderText("me@example.com");
    pwdInput = getByPlaceholderText("Enter the password");
    submitButton = getByRole("button");
  });
  test("");
});
