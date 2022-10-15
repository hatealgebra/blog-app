import { rest } from "msw";
import { BASE_API_URL } from "../utils/contants";

import articlesJSON from "./json/articles.json";

export const handlers = [
  rest.get(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...articlesJSON }));
  }),
];
