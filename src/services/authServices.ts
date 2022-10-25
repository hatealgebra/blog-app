import axios from "axios";
import { BASE_API_URL } from "../utils/contants";
import { API_KEY } from "./services.config";

export const loginPOST = async (username: string, password: string) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_API_URL}/login`,
      data: {
        username,
        password,
      },
      headers: { "X-API-KEY": API_KEY },
    });
    return response;
  } catch (e) {
    throw e;
  }
};
