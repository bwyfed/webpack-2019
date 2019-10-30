// 引子：普通写法，完全打包
// import _ from 'lodash'

// console.log(_.join(['a', 'b', 'c'], '***'))

// 假设业务逻辑代码1MB，lodash库的大小1MB
// 如果打包在一起，打包文件会很大，
// 首次访问页面时，加载main.js(2MB)，加载时间会很长
// lodash这个第三方库，一般是不会被改变的
// 如果业务逻辑改变，重新打包
// 用户再次访问页面，又要重新加载main.js，2MB的内容

// 第一种方法：手动分割方法。引入新文件lodash.js
// 直接写业务逻辑即可，因为有了新文件lodash.js
// main.js被拆分成lodash.js(1MB),main.js(1MB)
// 当页面的业务逻辑发生变化时，只要加载main.js(1MB)即可。
// console.log(_.join(['a', 'b', 'c'], '***'))
// 此处省略10万行业务逻辑....
// console.log(_.join(['a', 'b', 'c'], '***'))

// 第二种方式: 库和业务逻辑写在一起，增加optimization.splitChunks配置项
// import _ from 'lodash'
// import a from './a'

// console.log(_.join(['a', 'b', 'c'], '***'))
// console.log(_.join(['a', 'b', 'c'], '***'))
// console.log(a)

// 第三种方式：使用异步方式引入模块
function getComponent() {
  return import(/* webpackChunkName:"lodash" */'lodash').then((_) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell', 'Lee'], '-')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})