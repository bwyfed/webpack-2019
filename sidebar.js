function Sidebar() {
  var dom = document.getElementById('root')
  var sidebar = document.createElement('div')
  sidebar.innerText = 'sidebar'
  dom.append(sidebar)
}

// ES Module 导出
// export default Sidebar
// CommonJS导出
module.exports = Sidebar