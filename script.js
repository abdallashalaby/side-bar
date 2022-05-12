const blocks = [
  {
    text: '<h1> page 1 </h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam atque quod illum. Ipsam reprehenderit asperiores commodi enim corrupti consequatur nemo totam, repudiandae expedita voluptates dolore aspernatur minus impedit eligendi explicabo!',
  },
  {
    text: '<h1> page 2 </h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam atque quod illum. Ipsam reprehenderit asperiores commodi enim corrupti consequatur nemo totam, repudiandae expedita voluptates dolore aspernatur minus impedit eligendi explicabo!',
  },
  {
    text: '<h1> page 3 </h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam atque quod illum. Ipsam reprehenderit asperiores commodi enim corrupti consequatur nemo totam, repudiandae expedita voluptates dolore aspernatur minus impedit eligendi explicabo!',
  },
  {
    text: '<h1>contact </h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam atque quod illum. Ipsam reprehenderit asperiores commodi enim corrupti consequatur nemo totam, repudiandae expedita voluptates dolore aspernatur minus impedit eligendi explicabo!',
  },
]
const links = [
  {
    text: 'page 1',
    href: 'index1.html',
  },
  {
    text: 'page 2',
    href: 'index2.html',
  },
  {
    text: 'page 3',
    href: 'index3.html',
  },
  {
    text: 'contact',
    href: 'contact.html',
  },
]
const sidebar = document.getElementById('sidebar')

// document.getElementById('con').innerHTML = blocks[0].text

links.forEach((obj, i) => {
  let element = document.createElement('a')
  element.innerText = obj.text
  element.id = 'item-' + i
  element.addEventListener('click', () => {
    document.getElementById('con').innerHTML = blocks[i].text
    window.location.href = links[i].href
  })
  sidebar.appendChild(element)
})
