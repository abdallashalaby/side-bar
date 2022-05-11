const links = [
  {
    text: 'page 1',
    href: 'http://127.0.0.1:5500/index1.html',
  },
  {
    text: 'page 2',
    href: 'http://127.0.0.1:5500/index2.html',
  },
  {
    text: 'page 3',
    href: 'http://127.0.0.1:5500/index3.html',
  },
  {
    text: 'contact',
    href: 'http://127.0.0.1:5500/contact.html',
  },

  // add more links
]
const sidebar = document.getElementById('sidebar')

// put these steps in a loop
for (var i = 0; i < 4; i++) {
  let link = document.createElement('a')
  link.innerHTML = links[i].text
  link.setAttribute('href', links[i].href)
  link.id = i
  sidebar.appendChild(link)
}
// let links = document.querySelector('sidebar');
let url = window.location.href
alert(url)
let fir = links[0].href
let sec = links[1].href
let thi = links[2].href
let con = links[3].href

if (fir == url) {
  document.getElementById('0').classList.add('active')
}
if (sec == url) {
  document.getElementById('1').classList.add('active')
}
if (thi == url) {
  document.getElementById('2').classList.add('active')
}
if (con == url) {
  document.getElementById('3').classList.add('active')
}
