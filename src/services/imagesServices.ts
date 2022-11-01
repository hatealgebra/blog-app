import {
  API_KEY,
  appLiftingAxios,
  appLiftingAxiosProtected,
} from "./services.config";

export const uploadImage = async (imageFile: File) => {
  let bodyFormData = new FormData();
  bodyFormData.append("image", imageFile);
  try {
    const response = await appLiftingAxiosProtected.post("/images", imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const showImage = async (imageId: string) => {
  try {
    return await appLiftingAxios.get(`/${imageId}`);
  } catch (e) {
    throw e;
  }
};

export const deleteImage = async (
  imageId: string,
  access_token: string | undefined
) => {
  try {
    return appLiftingAxiosProtected.delete(`/${imageId}`, {
      headers: { Authorization: access_token },
    });
  } catch (e) {
    throw e;
  }
};
