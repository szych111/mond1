const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

//preloader

const preloader = document.querySelector('.preloader')

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})

//contact-modal 
const openContact = document.getElementById('contact-open')
const contactClose = document.getElementById('contact-close')
const contactModal = document.querySelector('.contact-modal')

openContact.addEventListener('click', () => {
    contactModal.classList.add('open-modal')
})
contactClose.addEventListener('click', () => {
    contactModal.classList.remove('open-modal')
})

//services-modal 
const servicesOpen = document.getElementById('services-open')
const servicesClose = document.getElementById('services-close')
const servicesModal = document.querySelector('.services-modal')

servicesOpen.addEventListener('click', () => {
    servicesModal.classList.add('open-modal')
})
servicesClose.addEventListener('click', () => {
    servicesModal.classList.remove('open-modal')
})