import axios from "axios";
import { paths } from "../../types";
import { BASE_API_URL } from "../../utils/contants";

export const postImage = (
  imageFile: File,
  apiKey: string,
  acessToken: string
  //   accessToken: string
) => {
  try {
    return axios<paths["/images"]>({
      method: "post",
      url: `${BASE_API_URL}/articles`,
      headers: { "X-API-KEY": apiKey, Authorization: acessToken },
      data: { content: imageFile },
    });
  } catch (e) {
    return e;
  }
};
