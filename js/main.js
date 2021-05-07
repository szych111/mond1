// video-switch 

const videoBtn = document.querySelector('.video-btn')
const video = document.querySelector('.video-container')

videoBtn.addEventListener('click', function(){
    if(!videoBtn.classList.contains('slide')) {
        videoBtn.classList.add('slide')
        video.pause()
    } else {
        videoBtn.classList.remove('slide')
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
const homepage = document.querySelector('.homepage-content')

openContact.addEventListener('click', () => {
    contactModal.classList.add('open-modal')
    homepage.classList.add('homepage-lessvisible')
})
contactClose.addEventListener('click', () => {
    contactModal.classList.remove('open-modal')
    homepage.classList.remove('homepage-lessvisible')
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