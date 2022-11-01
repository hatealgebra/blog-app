import axios from "axios";

import { appLiftingAxiosProtected } from "./services.config";

export const listArticles = async () => {
  try {
    return await appLiftingAxiosProtected.get("/articles");
  } catch (e) {
    throw e;
  }
};

export const createArticle = async (
  title: string,
  perex: string,
  imageId: string,
  content: string,
  access_token: string
) => {
  try {
    const response = await appLiftingAxiosProtected.post("/articles", {
      data: { title, perex, imageId, content },
    });
    console.log(response);
  } catch (e) {
    throw e;
  }
};

export const getArticle = async (articleId: string, access_token: string) => {
  try {
    return await appLiftingAxiosProtected.get(`/${articleId}`, {
      headers: { Authorization: access_token },
    });
  } catch (e) {
    throw e;
  }
};

export const deleteArticle = async (
  articleId: string,
  access_token: string
) => {
  try {
    return await appLiftingAxiosProtected.delete(`/${articleId}`, {
      headers: { Authorization: access_token },
    });
  } catch (e) {
    throw e;
  }
};

export const updateArticle = async (
  articleId: string,
  access_token: string
) => {
  try {
    return await appLiftingAxiosProtected.patch(`/${articleId}`, {
      headers: { Authorization: access_token },
    });
  } catch (e) {
    throw e;
  }
};
