import { listArticles } from "./src/services/articlesOperations";

exports.createPages = async ({ actions: { createPage } }) => {
  const allArticles = await (await listArticles()).data.items;
  const article = allArticles[0];
  console.log(allArticles)

  // Create a page that lists all Pokémon.
  createPage({
    path: `/blog`,
    component: require.resolve("./src/templates/ArticlePage.tsx"),
    context: { article },
  });

//   allArticles.forEach((article) => {
//     createPage({
//       path: `/blog/${article.title}/`,
//       component: require.resolve("./src/templates/ArticlePage.tsx"),
//       context: { article },
//     });
//   });
// };
