const slider = document.querySelector('#slider')
import { data } from '../data/slider-data.js'

slider.scrollLeft = 150

data.forEach((e) => {
    let slide = document.createElement('div')
    slide.classList.add('slide')

    let slide_title = document.createElement('h3')
    slide_title.innerText = `${e.product}`
    let slide_image = document.createElement('img')
    slide_image.setAttribute('src', `${e.img}`)

    slider.appendChild(slide)
    slide.appendChild(slide_image)
    slide.appendChild(slide_title)
})

const ele = document.querySelector('#slider')

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function (e) {
    // Change the cursor and prevent user from selecting the text
    ele.style.cursor = 'grabbing'
    ele.style.userSelect = 'none'
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
}

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    // Scroll the element
    ele.scrollTop = pos.top - dy
    ele.scrollLeft = pos.left - dx
}
const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

    ele.style.cursor = 'grab'
    ele.style.removeProperty('user-select')
}

slider.addEventListener('mousedown', mouseDownHandler)
