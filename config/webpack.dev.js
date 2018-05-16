const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const paths = require('./paths')


const port = process.env.PORT || 4000

module.exports = {
  mode: 'development',

  entry: {
    app: [
      paths.index,
      `webpack-dev-server/client?http://localhost:${port}`
    ]
  },

  output: {
    path: paths.build,
    filename: 'static/js/[name].js'
  },

  devtool: 'inline-source-map',

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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: paths.public,
    compress: true,
    port: port
  },

  plugins: [
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
