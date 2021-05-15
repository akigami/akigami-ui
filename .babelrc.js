const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  "plugins": [
    ["babel-plugin-styled-components", {
      "pure": true,
      "displayName": isDev,
      "fileName": isDev,
      "minify": !isDev,
    }]
  ]
};