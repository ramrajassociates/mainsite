const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://ramrajassociates.com",
  pagesDirectory: path.resolve(__dirname, "pages"),
  targetDirectory: "public/",
  ignoreIndexFiles: true,
  ignoredPaths: ["api"], // Exclude API routes.
});

console.log(`✅ sitemap.xml generated!`);
