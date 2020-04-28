const defaultConfig = require("@wordpress/scripts/config/webpack.config");
 
module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.css$/,
        //use: ["css-loader", "style-loader"],
        use:["@svgr/webpack","url-loader"]
      }
    ]
  }
};