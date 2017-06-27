const path = require('path');
const webpack = require('webpack');

const {NODE_ENV} = process.env;

module.exports = {
  entry: './src/js/hello.jsx',
  output: { path: path.join(__dirname, '../public/js'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: NODE_ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : []
};
