const rules = require('./webpack.rules');
const { VueLoaderPlugin } = require('vue-loader');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.vue$/,
  loader: 'vue-loader'
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
