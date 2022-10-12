import { ADMIN_CONFIG } from "../services/admin";
import { login } from "../services/userHandling";

const loginUser = async (email: string, pwd: string) => {
  try {
    const response = login(email, pwd, ADMIN_CONFIG.API_KEY);
    console.log(response);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default loginUser;
