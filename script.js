function show_content1() {
  document.getElementById('con').innerText = 'content ' + '1'
}
function show_content2() {
  document.getElementById('con').innerText = 'content ' + '2'
}
function show_content3() {
  document.getElementById('con').innerText = 'content ' + '3'
}
function show_content4() {
  document.getElementById('con').innerText = 'content ' + '4'
}

const links = [
  {
    text: 'page 1',
    href: '',
  },
  {
    text: 'page 2',
    href: '',
  },
  {
    text: 'page 3',
    href: '',
  },
  {
    text: 'contact',
    href: '',
  },
]
const sidebar = document.getElementById('sidebar')

for (var i = 0; i < 4; i++) {
  sidebar.innerHTML +=
    `<a href="#" id="item` + i + `" onclick="show_content` + (i + 1) + `()">` + links[i].text + `</a>`
}
document.getElementById('item0').onclick = function () {
  document.getElementById('con').innerText = 'content ' + '1'
  document.getElementById('item3').style.color = '#aaa'
  document.getElementById('item1').style.color = '#aaa'
  document.getElementById('item2').style.color = '#aaa'
  document.getElementById('item0').style.color = 'red'
}
document.getElementById('item1').onclick = function () {
  document.getElementById('con').innerText = 'content ' + '2'
  document.getElementById('item0').style.color = '#aaa'
  document.getElementById('item3').style.color = '#aaa'
  document.getElementById('item2').style.color = '#aaa'
  document.getElementById('item1').style.color = 'red'
}
document.getElementById('item2').onclick = function () {
  document.getElementById('con').innerText = 'content ' + '3'
  document.getElementById('item0').style.color = '#aaa'
  document.getElementById('item1').style.color = '#aaa'
  document.getElementById('item3').style.color = '#aaa'
  document.getElementById('item2').style.color = 'red'
}
document.getElementById('item3').onclick = function () {
  document.getElementById('con').innerHTML = 'content ' + 'contact page'
  document.getElementById('item0').style.color = '#aaa'
  document.getElementById('item1').style.color = '#aaa'
  document.getElementById('item2').style.color = '#aaa'
  document.getElementById('item3').style.color = 'red'
}
