module.exports = function(eleventyConfig) {

  // Collection of all pages
  eleventyConfig.addCollection("allpages", function(collectionApi) {
    return collectionApi.getAll();
  });

  // Safe breadcrumbs filter
  eleventyConfig.addNunjucksFilter("breadcrumbs", function(page) {
    // Ensure page and page.url exist
    let url = page?.url;
    if (typeof url !== "string") return [];

    // Remove trailing slash for processing
    if (url.endsWith("/") && url !== "/") url = url.slice(0, -1);

    const parts = url.split("/").filter(Boolean);
    let path = "";
    const breadcrumb = [];
    for (const part of parts) {
      path += `/${part}`;
      breadcrumb.push({ name: part, url: path + "/" });
    }
    return breadcrumb;
  });

  return {
    dir: {
      input: "src",       // your Markdown pages
      includes: "_includes", // layouts
      data: "_data",
      output: "_site"
    }
  };
};
