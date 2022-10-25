import axios from "axios";
import { BASE_API_URL } from "../utils/contants";
import { API_KEY } from "./services.config";

export const uploadImage = async (image: File, access_token: string) => {
  try {
    return await axios({
      method: "post",
      url: `${BASE_API_URL}/images`,
      headers: { Authorization: access_token, "X-API-KEY": API_KEY },
      data: { image },
    });
  } catch (e) {
    throw e;
  }
};

export const showImage = async (imageId: string) => {
  try {
    return await axios({
      method: "get",
      url: `${BASE_API_URL}/${imageId}`,
    });
  } catch (e) {
    throw e;
  }
};

export const deleteImage = async (imageId: string, access_token: string) => {
  try {
    return await axios({
      method: "delete",
      url: `${BASE_API_URL}/${imageId}`,
      headers: { Authorization: access_token, "X-API-KEY": API_KEY },
    });
  } catch (e) {
    throw e;
  }
};
