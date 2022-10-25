import { API_KEY } from "../services/services.config";
import { loginPOST } from "../services/authServices";
import { emailValidation, pwdValidation } from "../utils/regex.utils";

const authSubmit = async (
  e: React.FormEvent,
  email: string,
  pwd: string,
  setFormError: React.Dispatch<React.SetStateAction<ELoginFormValidation>>
): Promise<string | boolean> => {
  e.preventDefault();
  const emailTrim = email.trim();
  const pwdTrim = pwd.trim();
  if (emailTrim.length === 0 || !emailValidation(emailTrim)) {
    setFormError(ELoginFormValidation.INVALID_EMAIL);
  } else if (!pwdValidation(pwdTrim)) {
    setFormError(ELoginFormValidation.EMPTY_PASSWORD);
  } else if (emailValidation(emailTrim) && pwdValidation(pwdTrim)) {
    try {
      const response = await loginPOST(emailTrim, pwdTrim);
      setFormError(ELoginFormValidation.CORRECT_LOGIN);
      return response.data;
    } catch (e) {
      setFormError(ELoginFormValidation.INCORRECT_LOGIN);
    }
  } else {
    setFormError(ELoginFormValidation.UNEXPECTED_ERROR);
  }

  return false;
};

export enum ELoginFormValidation {
  INVALID_EMAIL = "Email should be in this format: email@example.com. Please check it.",
  EMAIL_NOT_FOUND = "Login with this email does not exist.",
  EMPTY_PASSWORD = "Password field is empty. Please check it",
  INCORRECT_LOGIN = "Incorrect login.",
  UNEXPECTED_ERROR = "Unexpected error.",
  CORRECT_LOGIN = "",
}

export default authSubmit;
