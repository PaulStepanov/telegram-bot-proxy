const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'telegramProxyBot.js',
  },

  module: {
    rules: [],
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '*'],

    alias: {
      '@constants': path.resolve(__dirname, 'src/constants/index.js'),
    },
  },

  context: __dirname,

  target: 'node',
};
