module.exports = {
  entry: './babel.js',
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      "chrome": "70"
                    },
                    useBuiltIns: 'usage', // 默认false，可选entry，usage
                    corejs: 3, // 添加core-js版本
                    modules: false // 模块规范使用es modules，不使用commonJS规范
                  }
                ]
              ],
              "plugins": [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: false, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
                    useESModules: true // 默认false。使用es modules helpers，减少commonJS语法
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};