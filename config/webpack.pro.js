const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = require('./paths')

module.exports = {
  mode: 'production',

  entry: {
    app: [
      paths.index
    ]
  },

  output: {
    path: paths.build,
    filename: 'static/js/[name].[hash:8].js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: paths.src,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: paths.src,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              minimize: true,
              sourceMap: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin([
      path.join(paths.build, '**/*')
    ], {
      root: paths.root
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
      inject: true,
      cache: false,

      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css"
    })
  ]
}
