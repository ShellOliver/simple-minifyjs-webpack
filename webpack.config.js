const path          = require('path');
const webpack       = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};