module.exports = function(eleventyConfig) {
  // Collection of all pages
  eleventyConfig.addCollection("allpages", function(collectionApi) {
    return collectionApi.getAll();
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
