import axios from "axios";
import { BASE_API_URL } from "../utils/contants";
import { API_KEY } from "./services.config";

export const getTenant = async (tenantId: string) => {
  try {
    return await axios({
      method: "get",
      url: `${BASE_API_URL}/${tenantId}`,
      headers: { "x-api-key": API_KEY },
    });
  } catch (e) {
    throw e;
  }
};
