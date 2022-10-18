import { USER_CONFIG } from "../services/userConfig";
import { login } from "../services/user/userPOST";

const loginUserHelper = async (email: string, pwd: string) => {
  const response = await login(email, pwd, USER_CONFIG.API_KEY);
  return response.data;
};

export default loginUserHelper;
