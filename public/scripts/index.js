const toggler = document.querySelector('nav .toggler')
const menu = document.querySelector('nav .menu')

toggler.addEventListener('click', () => {
    menu.classList.toggle('active')
})   