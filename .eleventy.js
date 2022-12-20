module.exports = function(eleventyConfig) {

  // Copy `src/robots.txt` to `_site/robots.txt`
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  // Copy `src/images/combadge.svg` to `_site/images/combadge.svg`
  eleventyConfig.addPassthroughCopy("./src/images/combadge.svg");

  // Copy `src/styles/main.css` to `_site/styles/main.css`
  eleventyConfig.addPassthroughCopy("./src/styles/main.css");
  eleventyConfig.addPassthroughCopy("./src/styles/stars.css");

  // Copy `src/fonts/*` to `_site/fonts/*`
  eleventyConfig.addPassthroughCopy("./src/fonts/*");

  return {    
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
