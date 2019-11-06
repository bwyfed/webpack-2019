function Content() {
  var dom = document.getElementById('root')
  var content = document.createElement('div')
  content.innerText = 'content'
  dom.append(content)
}

// ES Module 导出
// export default Content
// CommonJS导出
module.exports = Content