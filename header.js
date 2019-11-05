function Header() {
  var dom = document.getElementById('root')
  var header = document.createElement('div')
  header.innerText = 'header'
  dom.append(header)
}

// ES Module 导出
// export default Header
// CommonJS导出
module.exports = Header