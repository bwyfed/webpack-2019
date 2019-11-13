// 示例1: CSS文件热重载
// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// 示例2：JS代码热重载
import counter from './counter'
import number from './number'

counter()
number()

if(module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}