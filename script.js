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
