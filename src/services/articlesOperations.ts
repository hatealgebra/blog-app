import axios from "axios";

import {
  API_KEY,
  appLiftingAxiosProtected,
  BASE_API_URL,
} from "./services.config";

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
  content: string
) => {
  const data = {
    title,
    perex,
    imageId,
    content,
  };

  try {
    const response = await appLiftingAxiosProtected.post("/articles", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getArticle = async (articleId: string) => {
  try {
    return await appLiftingAxiosProtected.get(`/articles/${articleId}`);
  } catch (e) {
    throw e;
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    return await appLiftingAxiosProtected.delete(`/articles/${articleId}`);
  } catch (e) {
    throw e;
  }
};

export const updateArticle = async (
  articleId: string,
  access_token: string | undefined,
  data: any
) => {
  try {
    console.log(articleId);
    const response = await appLiftingAxiosProtected.patch(
      `/articles/${articleId}`,
      data,
      {
        headers: { Authorization: access_token },
      }
    );
    console.log(response);
    return response;
  } catch (e) {
    throw e;
  }
};
