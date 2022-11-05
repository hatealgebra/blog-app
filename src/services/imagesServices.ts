import {
  API_KEY,
  appLiftingAxios,
  appLiftingAxiosProtected,
} from "./services.config";

export const uploadImage = async (imageFile: FormData) => {
  const response = await appLiftingAxiosProtected.post("/images", imageFile, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
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
    return appLiftingAxiosProtected.delete(`/images/${imageId}`, {
      headers: { Authorization: access_token },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
