let icon = document.querySelector('.menu')
let closeIcon = document.querySelector('.close')

icon.addEventListener('click',() => {
    let menuMobile = document.querySelector('.menuMobile');
    menuMobile.style.display = 'block'
})

closeIcon.addEventListener('click',() => {
    let menuMobile = document.querySelector('.menuMobile');
    menuMobile.style.display = 'none'
})
