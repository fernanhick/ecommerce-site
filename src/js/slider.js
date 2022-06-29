const slider = document.querySelector('#slider')
import { data } from '../data/slider-data.js'

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
