// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin()
  ]
}