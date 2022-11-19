import path from "path";
import { getArticle, listArticles } from "./src/services/articlesOperations";
import { components } from "./src/types";

export const createPages = async ({ actions: { createPage } }) => {
  // list all of the articles that are published
  const articlesResponse = await listArticles();
  const { items } = articlesResponse.data;
  const newArticlesArray = await Promise.all(
    items.map(async (article: components["schemas"]["Article"]) => {
      const { articleId, createdAt } = article;
      const getArticleResponse = await getArticle(articleId!);
      const { comments, content } = getArticleResponse.data;
      return { ...article, comments, content };
    })
  );

  // // Create a page with recent articles feed
  // createPage({
  //   path: `/`,
  //   component: path.resolve(
  //     "./src/components/templates/RecentArticles.template.tsx"
  //   ),
  //   context: { allArticles },
  // });

  //  Create page for each article
  newArticlesArray.forEach((article) => {
    createPage({
      path: `/articles/${article.articleId}`,
      component: path.resolve(
        "./src/components/templates/ArticlePage.template.tsx"
      ),
      context: { article },
    });
  });
};
if (process.env.NODE_ENV === "development") {
  const { server } = require("./src/__mocks__/server");
  server.listen();
}
