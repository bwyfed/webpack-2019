// 示例1: 处理 css 文件
// import avatar from './avatar.jpg'
// import './index.css'

// var img = new Image()
// img.src = avatar
// img.classList.add('avatar')

// var root = document.getElementById('root')
// root.append(img)

//示例2: 处理scss文件
// import avatar from './avatar.jpg'
// import './index.scss'

// var img = new Image()
// img.src = avatar
// img.classList.add('avatar')

// var root = document.getElementById('root')
// root.append(img)

// 示例3：CSS全局引入
// import avatar from './avatar.jpg'
// import './index.scss'
// import createAvatar from './createAvatar'
// // 创建一张图片
// createAvatar()
// // 创建另一张图片
// var img = new Image()
// img.src = avatar
// img.classList.add('avatar')
// var root = document.getElementById('root')
// root.append(img)
// 这两张图片的样式是一样的，都是index.scss

// 示例4: CSS 模块化
// import avatar from './avatar.jpg'
// import style from './index.scss'
// import createAvatar from './createAvatar'
// // 创建一张图片
// createAvatar()
// // 创建另一张图片
// var img = new Image()
// img.src = avatar
// img.classList.add(style.avatar)
// var root = document.getElementById('root')
// root.append(img)

// 示例5：打包字体文件
import './index.scss' // 此时是全局引入，要将CSS Module功能给关闭掉
var root = document.getElementById('root')
root.innerHTML = '<div class="iconfont icon-baozhuang"></div>'
