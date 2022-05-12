var loc = new URLSearchParams(window.location.search).get('page')

var url = links.findIndex(obj => {
  return loc == obj.href
})

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

document.getElementById(links[url].href).classList.toggle('active')
document.getElementById('con').innerHTML = contents[url].text
