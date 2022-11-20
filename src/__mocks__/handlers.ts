import { rest } from "msw";
import {
  API_KEY,
  BASE_API_URL,
  USER_CONFIG,
} from "../services/services.config";

import loginResponseJSON from "../__mocks__/asyncData/post/login.mock.json";
import createArticleResponseJSON from "../__mocks__/asyncData/post/createArticleResponse.mock.json";
import imageResponseJSON from "../__mocks__/asyncData/post/postImageResponse.mock.json";
import articlesResponseJSON from "../__mocks__/asyncData/get/allArticlesResponse.mock.json";
import articlesDetailResponseJSON from "../__mocks__/asyncData/get/articlesDetailsResponse.mock.json";
// import britishCatJPG from "../images/british-haircat.jpg";

const getArticleDetail = (articleId: readonly string[]) => {
  const articleDetailData = articlesDetailResponseJSON.find(
    (article) => article.articleId === articleId
  );
  return articleDetailData;
};

export const handlers = [
  /* POST handling */
  // Login
  rest.post(`${BASE_API_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === USER_CONFIG.NAME && password === "MockPwd12345") {
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
    return res(ctx.status(200), ctx.json(imageResponseJSON));
  }),

  /* GET handling*/

  // List Articles
  // FIXME: Fix the reauthorize, the dispatch is called multiple
  rest.get(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articlesResponseJSON));
  }),
  // Article detail
  rest.get(`${BASE_API_URL}/articles/:articleId`, (req, res, ctx) => {
    const { articleId } = req.params;
    return res(
      ctx.set({
        "X-API-KEY": API_KEY,
        Authorization: loginResponseJSON.access_token,
      }),
      ctx.status(200),
      ctx.json(getArticleDetail(articleId))
    );
  }),
  // // Images
  // rest.get(`${BASE_API_URL}/images/:imageId`, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.body(britishCatJPG));
  // }),
  // // Tenant
  // rest.get(`${BASE_API_URL}/tenants/:tenantId`, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(tenantMockJSON));
  // }),

  /* DELETE */
  // Delete article
  rest.delete(`${BASE_API_URL}/articles/:articleId`, (req, res, ctx) => {
    const { articleId } = req.params;

    const getDeletedArticle = articlesResponseJSON.items.filter(
      ({ articleId: id }: { articleId: string }) => id === articleId
    )[0];
    return res(ctx.status(200), ctx.body(getDeletedArticle));
  }),

  /* PATCH */
  // Update article
  rest.patch(`${BASE_API_URL}/articles/:articleId`, async (req, res, ctx) => {
    const { articleId } = await req.json();
    return res(ctx.status(200), ctx.json(getArticleDetail(articleId)));
  }),
];
