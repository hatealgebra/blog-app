import { rest } from "msw";
import {
  API_KEY,
  BASE_API_URL,
  USER_CONFIG,
} from "../services/services.config";

import articlesJSON from "./responses/articlesResponse.mock.json";
import loginResponseJSON from "./responses/loginResponse.mock.json";
import articleDetailJSON from "./responses/articleDetailResponse.mock.json";
import imageMockJSON from "./responses/postImage.mock.json";
import createArticleResponseJSON from "./responses/postArticleResponse.mock.json";

import britishCatJPG from "../images/british-haircat.jpg";

export const handlers = [
  /* POST handling */
  // Login
  rest.post(`${BASE_API_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === USER_CONFIG.NAME && password === "Applifting123") {
      return res(ctx.status(200), ctx.json(loginResponseJSON));
    } else {
      return res(ctx.status(400), ctx.json({ error: "Invalid credentials" }));
    }
  }),
  // Publish article
  rest.post(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createArticleResponseJSON));
  }),
  // Upload image
  rest.post(`${BASE_API_URL}/images`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(imageMockJSON));
  }),

  /* GET handling*/

  // List Articles
  // FIXME: Fix the reauthorize, the dispatch is called multiple
  rest.get(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articlesJSON));
  }),
  // Article detail
  rest.get(`${BASE_API_URL}/articles/:articleId`, (req, res, ctx) => {
    return res(
      ctx.set({
        "X-API-KEY": API_KEY,
        Authorization: loginResponseJSON.access_token,
      }),
      ctx.status(200),
      ctx.json(articleDetailJSON)
    );
  }),
  // Images
  rest.get(`${BASE_API_URL}/images/:imageId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(britishCatJPG));
  }),

  /* DELETE */
  // Delete article
  rest.delete(`${BASE_API_URL}/articles/:articleId`, (req, res, ctx) => {
    const { articleId } = req.params;

    const getDeletedArticle = articlesJSON.items.filter(
      ({ articleId: id }: { articleId: string }) => id === articleId
    )[0];
    return res(ctx.status(200), ctx.body(getDeletedArticle));
  }),

  /* PATCH */
  // Update article
  rest.patch(`${BASE_API_URL}/articles/:articleId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articleDetailJSON));
  }),
];
