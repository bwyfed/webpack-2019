// ES Module 模块引入方式
// import Header from './header.js'
// import Sidebar from './sidebar.js'
// import Content from './content.js'

// CommonJS 模块引入方式
// var Header = require('./header.js')
// var Sidebar = require('./sidebar.js')
// var Content = require('./content.js')
// new Header()
// new Sidebar()
// new Content()
// var avatar = require('./avatar.jpg')

// ES Module的语法
import avatar from './avatar.jpg'
console.log(avatar)

var img = new Image()
img.src = avatar

var root = document.getElementById('root')
root.append(img)