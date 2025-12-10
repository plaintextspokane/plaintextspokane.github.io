module.exports = function(eleventyConfig) {

  // Collection of all pages
  eleventyConfig.addCollection("allpages", function(collectionApi) {
    return collectionApi.getAll();
  });

  // Breadcrumb filter
  eleventyConfig.addNunjucksFilter("breadcrumbs", function(page) {
    // page.url might be undefined, so check
    let url = page?.url || "/";
    if (typeof url !== "string") url = "/";

    // Remove trailing slash
    if (url.endsWith("/") && url !== "/") url = url.slice(0, -1);

    const parts = url.split("/").filter(Boolean);
    let path = "";
    let breadcrumb = '<a href="/">Home</a>';

    for (const part of parts) {
      path += `/${part}`;
      breadcrumb += ` &raquo; <a href="${path}/">${part}</a>`;
    }

    return breadcrumb;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
