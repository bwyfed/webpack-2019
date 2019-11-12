const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://cdn.com.cn'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 通过@import引入的scss文件，也走postcss-loader和sass-loader处理
            // 如果是引入字体文件，则是全局引入，不需要配置CSS module
            // modules: true // 增加CSS module的功能
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(eot|ttf|woff2?|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [
    // 打包之后运行
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 打包之前运行
    new CleanWebpackPlugin()
  ]
}