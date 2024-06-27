let init = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setWatchJavaScriptDependencies(true);
    return {
        templateFormats: ["md"],
        dir: {
            input: "content",
            output: "_site",
            includes: "../_includes",
            data: "../_data"
        },
    };
};

export default init;