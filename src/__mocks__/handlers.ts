import { rest } from "msw";
import { USER_CONFIG } from "../services/services.config";
import { BASE_API_URL } from "../utils/contants";

import articlesJSON from "./responses/articlesResponse.mock.json";
import loginResponseJSON from "./responses/loginResponse.mock.json";

export const handlers = [
  // LOGIN
  rest.post(`${BASE_API_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();
    if (username === USER_CONFIG.NAME && password === "Applifting123") {
      return res(ctx.status(200), ctx.json(loginResponseJSON));
    } else {
      return res(ctx.status(400), ctx.json({ error: "Invalid credentials" }));
    }
  }),
  // ARTICLES
  rest.get(`${BASE_API_URL}/articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...articlesJSON }));
  }),
];
