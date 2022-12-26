const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Copy `src/robots.txt` to `_site/robots.txt`
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  // Copy `src/images/combadge.svg` to `_site/images/combadge.svg`
  eleventyConfig.addPassthroughCopy("./src/images/combadge.svg");
  eleventyConfig.addPassthroughCopy("./src/images/Klop.svg");
  eleventyConfig.addPassthroughCopy("./src/images/Craig.svg");
  eleventyConfig.addPassthroughCopy("./src/images/TerribleTrek.svg");
  eleventyConfig.addPassthroughCopy("./src/images/background.jpg");

  // Copy `src/styles/main.css` to `_site/styles/main.css`
  eleventyConfig.addPassthroughCopy("./src/styles/main.css");
  eleventyConfig.addPassthroughCopy("./src/styles/stars.css");

  // Copy `src/fonts/*` to `_site/fonts/*`
  eleventyConfig.addPassthroughCopy("./src/fonts/*");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    
    // Set custom directories for input, output, includes, and data
    dir: { 
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
