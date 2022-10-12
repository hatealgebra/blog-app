import { rest } from "msw";

import articlesJSON from "./json/articles.json";

export const handlers = [
  rest.get("/articles", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ content: articlesJSON }));
  }),
];
