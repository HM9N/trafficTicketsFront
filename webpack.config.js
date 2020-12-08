module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
    // purge: ["./src/**/*.html", "./src/**/*.ts"],
    // theme: {
    //   extend: {},
    // },
    // variants: {},
    // plugins: [],
  },
};
