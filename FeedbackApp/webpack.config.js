const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = ["home", "roadmap", "edit", "newFeedback", "details"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
  });
});

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/script.js",
    roadmap: "./src/js/roadmap.js",
    details: "./src/js/details.js",
    newFeedback: "./src/js/newFeedback.js",
    edit: "./src/js/edit.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      chunks: ["main"],
    }),
  ].concat(multipleHtmlPlugins),
};
