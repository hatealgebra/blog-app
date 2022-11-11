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
  // LOGIN
  rest.post(`${BASE_API_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === USER_CONFIG.NAME && password === "Applifting123") {
      return res(ctx.status(200), ctx.json(loginResponseJSON));
    } else {
      return res(ctx.status(400), ctx.json({ error: "Invalid credentials" }));
    }
  }),
  // PUBLISH ARTICLE
  rest.post(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createArticleResponseJSON));
  }),
  // POST IMAGE
  rest.post(`${BASE_API_URL}/images`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(imageMockJSON));
  }),

  // ARTICLES
  // FIXME: Fix the reauthorize, the dispatch is called multiple
  rest.get(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    console.log(res, ctx);
    return res(ctx.status(200), ctx.json(articlesJSON));
  }),
  // ARTICLE DETAIL
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
  // IMAGES
  rest.get(`${BASE_API_URL}/images/:imageId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(britishCatJPG));
  }),
];
