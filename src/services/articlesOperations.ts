import axios from "axios";
import { operations } from "../types";

import { BASE_API_URL } from "../utils/contants";
import { API_KEY } from "./services.config";

export const listArticles = async () => {
  try {
    return await axios<operations["listArticles"]>({
      method: "get",
      url: `${BASE_API_URL}/articles`,
      headers: { "X-API-KEY": API_KEY },
    });
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
    return await axios<operations["createArticle"]>({
      method: "post",
      url: `${BASE_API_URL}/articles`,
      headers: { "X-API-KEY": API_KEY, Authorization: access_token },
      data: {
        title,
        perex,
        imageId,
        content,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const getArticle = async (articleId: string, access_token: string) => {
  try {
    return await axios<operations["getArticle"]>({
      method: "get",
      url: `${BASE_API_URL}/${articleId}`,
      headers: {
        Authorization: access_token,
        "X-API-KEY": API_KEY,
      },
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
    return await axios<operations["deleteArticle"]>({
      method: "delete",
      url: `${BASE_API_URL}/${articleId}`,
      headers: { "X-API-KEY": API_KEY, Authorization: access_token },
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
    return await axios<operations["updateArticle"]>({
      method: "patch",
      url: `${BASE_API_URL}/${articleId}`,
      headers: { "X-API-KEY": API_KEY, Authorization: access_token },
    });
  } catch (e) {
    throw e;
  }
};
