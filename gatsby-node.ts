import { graphql } from "gatsby";
import path from "path";
import { getArticle, listArticles } from "./src/services/articlesOperations";
import { components } from "./src/types/declarations";

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // list all of the articles that are published

  const articles = await graphql(`
    query {
      allItems {
        nodes {
          articleId
          perex
          title
          imageId
          createdAt
          lastUpdatedAt
        }
      }
    }
  `);

  // Create a page with recent articles feed
  createPage({
    path: `/`,
    component: path.resolve("./src/pages/index.tsx"),
    context: { articles },
  });

  //  Create page for each article
  articles.data.allItems.nodes.forEach((article) => {
    console.log(article);
    createPage({
      path: `/articles/${article.articleId}`,
      component: path.resolve(
        "./src/components/templates/ArticlePage.template.tsx"
      ),
      context: { article },
    });
  });
};

// if (process.env.NODE_ENV === "development") {
//   const { server } = require("./src/__mocks__/server");
//   server.listen();
// }
