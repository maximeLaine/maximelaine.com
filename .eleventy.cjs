module.exports = function(eleventyConfig) {
  // Copy static assets to output (from root directory)
  eleventyConfig.addPassthroughCopy({ "css": "css" });
  eleventyConfig.addPassthroughCopy({ "js": "js" });
  eleventyConfig.addPassthroughCopy({ "img": "img" });
  eleventyConfig.addPassthroughCopy({ "fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "pdf": "pdf" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  // Watch for changes in SCSS files (if you add build process later)
  eleventyConfig.addWatchTarget("./scss/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
