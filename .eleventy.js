module.exports = function(eleventyConfig) {
  // Collection of all pages
  eleventyConfig.addCollection("allpages", function(collectionApi) {
    return collectionApi.getAll();
  });

  // Breadcrumb filter
  eleventyConfig.addNunjucksFilter("breadcrumbs", function(url) {
    // Remove trailing slash
    if(url.endsWith("/")) url = url.slice(0, -1);

    // Split path into parts
    const parts = url.split("/").filter(Boolean);

    // Build breadcrumb HTML
    let breadcrumb = '<a href="/">Home</a>';
    let path = "";
    for(const part of parts) {
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
