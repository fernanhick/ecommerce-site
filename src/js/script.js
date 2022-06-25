const burgerButton = document.getElementById('burger_icon')
const navBar = document.getElementById('navigation')
const navItems = document.querySelectorAll('.link_item')

// Toggle navbar
function toggleBar() {
    console.log('clicked burger')
    navBar.classList.toggle('nav_toggle')
    burgerButton.classList.toggle('burger_pressed')
}
// Addeventlistener to menu burger
burgerButton.addEventListener('click', toggleBar)

navItems.forEach((a) => {
    let page_path = window.location.pathname
    let link_href = a.children[0].href
    if (link_href.includes(`${page_path}`)) {
        a.classList.add('active')
    } else {
        a.classList.remove('active')
    }
})

console.log()
