// import './style.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

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
// var arr = [
//   {labelId: '1144039806727815200', id: '111'},
//   {labelId: '1144039806727815200', id: '111'},
//   {labelId: '1144039806727815202', id: '222'},
//   {labelId: '1144039806727815201', id: '333'},
//   {labelId: '1144039806727815203', id: '444'},
//   {labelId: '1144039806727815204', id: '555'},
//   {labelId: '1144039806727815205', id: '666'},
//   {labelId: '1144039806727815206', id: '777'}
// ]
// const tmp = {}
// arr.forEach(val => {
//   tmp[val.labelId] = val
// })
// console.log(tmp)
// const keys = Object.keys(tmp)
// console.log(keys)
// const result = []
// keys.forEach(key => {
//   result.push(tmp[key])
// })
// console.log(result)
// 方法1
// var set = new Set()
// arr.forEach((val, index) => {
//   console.log(val, index)
//   set.add(val.labelId)
// })
// console.log(set)
// const result = arr.filter(val => {
//   if (set.has(val.labelId)) {
//     result.add(val)
//   }
// })
// console.log(arr)
// 方法2
// var set = new Set()
// for(let i = 0; i < arr.length; i++)
// {
//   let val = arr[i]
//   console.log(val, i)
//   set.add(val.labelId)
// }
// console.log(set)
// var result = Array.from(set)
// console.log(result)