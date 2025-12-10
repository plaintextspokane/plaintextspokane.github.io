const path = require("path");

module.exports = function (eleventyConfig) {
  //
  // Pass-through copy for assets if you have any
  //
  eleventyConfig.addPassthroughCopy("src/assets");

  //
  // Breadcrumb filter
  //
  eleventyConfig.addFilter("breadcrumbs", function (page) {
    const parts = page.url.split("/").filter(Boolean);
    let crumbs = [];
    for (let i = 0; i < parts.length; i++) {
      crumbs.push({
        name: parts[i],
        url: "/" + parts.slice(0, i + 1).join("/") + "/"
      });
    }
    return crumbs;
  });

  //
  // Collection of all pages so index can generate itself
  //
  eleventyConfig.addCollection("allpages", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.url !== "/") // exclude homepage
      .sort((a, b) => a.url.localeCompare(b.url));
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
