const path = require('path');
const { override, addWebpackPlugin } = require('customize-cra');
const UnoCSS = require('@unocss/webpack').default


module.exports = {
  webpack: override(
    addWebpackPlugin(
      UnoCSS({
        presets: [
        ],
      }),
    ),
    (config) => {
      config.optimization.realContentHash = true;
      return config;
    },
  ),

};
