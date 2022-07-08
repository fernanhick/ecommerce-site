/* Import data for populating slider */
import { data } from '../data/slider-data.js'

/* Get Slider and Slider Container element */
const slider = document.querySelector('#slider')
const sliderContainer = document.querySelector('#slider-container')

data.forEach((e) => {
    let slide = document.createElement('div')
    slide.classList.add('slide')

    let slide_title = document.createElement('h3')
    slide_title.innerText = `${e.name}`
    let slide_image = document.createElement('img')
    slide_image.setAttribute('src', `${e.img.replace(/h=408/, 'h=280')}`)
    let slide_price = document.createElement('span')
    slide_price.textContent = `${e.price}`
    slider.appendChild(slide)
    slide.appendChild(slide_image)
    slide.appendChild(slide_title)
    slide.appendChild(slide_price)
})

const arrLeft = document.createElement('div')
const arrRight = document.createElement('div')
arrLeft.setAttribute('id', 'left-arrow')
arrRight.setAttribute('id', 'right-arrow')

sliderContainer.appendChild(arrLeft)
sliderContainer.appendChild(arrRight)

arrLeft.addEventListener('click', () => {
    slider.scrollLeft -= 800
})
arrRight.addEventListener('click', () => {
    slider.scrollLeft += 800
})
