let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let cursor = document.querySelector('.cursor')
let star = document.querySelector('.d14')
let mesec = document.querySelector('.d26')
let sky = document.querySelector('.d39')
let body = document.body
let box = document.querySelector('.box')
let cont = document.querySelector('.container')


one.onmouseenter = () => {
    star.style.display = 'block'
    cursor.style.display = 'none'
    sky.style.display = 'none'
    mesec.style.display = 'none'
}

two.onmouseenter = () => {
    sky.style.display = 'block'
    cursor.style.display = 'none'
    mesec.style.display = 'none'
    star.style.display = 'none'
}

three.onmouseenter = () => {
    mesec.style.display = 'block'
    cursor.style.display = 'none'
    star.style.display = 'none'
    sky.style.display = 'none'
}

body.onmouseenter = () => {
    cursor.style.display = 'block'
    star.style.display = 'none'
    sky.style.display = 'none'
    mesec.style.display = 'none'
}

box.onmouseenter = () => {
    cursor.style.display = 'block'
    star.style.display = 'none'
    sky.style.display = 'none'
    mesec.style.display = 'none'
}

cont.onmouseenter = () => {
    cursor.style.display = 'block'
    star.style.display = 'none'
    sky.style.display = 'none'
    mesec.style.display = 'none'
}


window.onmousemove = (event) => {
    let x = event.clientX

    let y = event.clientY

    cursor.style.top = `${y}px`

    cursor.style.left = `${x}px`

    star.style.top = `${y}px`

    star.style.left = `${x}px`

    mesec.style.top = `${y}px`

    mesec.style.left = `${x}px`

    sky.style.top = `${y}px`

    sky.style.left = `${x}px`


}


