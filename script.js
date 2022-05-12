document.getElementById('con').innerHTML = contents[0].text
const sidebar = document.getElementById('sidebar')
links.forEach((Obj, i) => {
  let element = document.createElement('a')
  element.innerText = links[i].text
  element.setAttribute('href', links[i].href)
  element.addEventListener('click', () => {
    document.getElementById('con').innerHTML = contents[i].text
    window.history.pushState({}, '', 'index' + (i + 1) + '.html')
    var current = document.getElementsByClassName('active')
    current[0].classList.toggle('active')
    element.classList.toggle('active')
  })

  sidebar.appendChild(element)
})
sidebar.firstChild.classList.add('active')
