
module.exports = {
  // 打包业务逻辑使用preset
  'presets': [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ]
  // 打包类库使用plugins
  // "plugins": [
  //   [
  //     "@babel/plugin-transform-runtime",
  //     {
  //       "absoluteRuntime": false,
  //       "corejs": 3, // false -> 3
  //       "helpers": true,
  //       "regenerator": true,
  //       "useESModules": false
  //     }
  //   ]
  // ]
}