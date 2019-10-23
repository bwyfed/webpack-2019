const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

// 'presets': [
  //   [
  //     '@babel/preset-env',
  //     {
  //       targets: {
  //         edge: '17',
  //         firefox: '60',
  //         chrome: '67',
  //         safari: '11.1'
  //       },
  //       useBuiltIns: 'usage',
  //       corejs: 3
  //     }
  //   ]
  // ]
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080, // 默认端口号8080
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    }, {
      test: /\.(eot|ttf|woff|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: false
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}