const path          = require('path');
const webpack       = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};