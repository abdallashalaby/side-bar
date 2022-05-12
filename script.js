function exctract_uri() {
  var url = new URLSearchParams(window.location.search).get('page')
  console.log(url)
  return url
}
function show_content(index) {
  if (index < 0) {
    document.getElementById('con').innerHTML = 'Error page not found'
  } else {
    document.getElementById('con').innerHTML = contents[index].text
  }
}
function route(loc = 'page-1') {
  if (!loc) {
    loc = 'page-1'
  }
  var url = links.findIndex(obj => {
    return loc == obj.href
  })
  console.log(url)
  return url
}
function activate_link(index) {
  if (index != -1) {
    var current = document.getElementsByClassName('active')
    if (current.length != 0) {
      current[0].classList.toggle('active')
    }
    document.getElementById(links[index].href).classList.toggle('active')
  }
}
function create_links() {
  document.getElementById('con').innerHTML = contents[0].text
  const sidebar = document.getElementById('sidebar')
  links.forEach((Obj, i) => {
    let element = document.createElement('a')
    element.innerText = links[i].text
    element.setAttribute('href', 'index.html?page=' + links[i].href)
    element.id = links[i].href
    element.addEventListener('click', e => {
      e.preventDefault()
      document.getElementById('con').innerHTML = contents[i].text
      window.history.pushState({}, '', 'index.html?page=' + links[i].href)
      var current = document.getElementsByClassName('active')
      current[0].classList.toggle('active')
      element.classList.toggle('active')
    })

    sidebar.appendChild(element)
  })
}
window.onload = () => {
  create_links()
  let rt = route(exctract_uri())
  // exctract_uri().route().activate_link().show_content()
  activate_link(rt)
  show_content(rt)
}
