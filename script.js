function loadLinks() {
  links = [
    {
      text: 'page 1',
      href: 'index1.html',
    },

    // add more links
  ]
  const sidebar = document.getElementById('sidebar2')

  // put these steps in a loop
  let link = document.createElement('a')
  link.innerHTML = links[0].text
  link.setAttribute('href', links[0].text)
  link.classList.add('nav-link')
  sidebar.appendChild(link)
}
// let links = document.querySelector('sidebar');
let url = window.location.href
let fir = document.getElementById('fir').href
let sec = document.getElementById('sec').href
let thi = document.getElementById('thi').href

if (fir == url) {
  document.getElementById('fir').classList.add('active')
}
if (sec == url) {
  document.getElementById('sec').classList.add('active')
}
if (thi == url) {
  document.getElementById('thi').classList.add('active')
}
