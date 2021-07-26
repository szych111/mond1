// video-btn 

const videoOn = document.querySelector('.video-on')
const videoOff = document.querySelector('.video-off')
const video = document.querySelector('.video-container')

videoOn.addEventListener('click', () => {
    video.play()
    videoOn.classList.add('video-btn-inactive')
    videoOff.classList.remove('video-btn-inactive')
})

videoOff.addEventListener('click', () => {
    video.pause()
    videoOff.classList.add('video-btn-inactive')
    videoOn.classList.remove('video-btn-inactive')
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
    document.body.classList.remove('nav-open')
})
contactClose.addEventListener('click', () => {
    contactModal.classList.remove('open-modal')
})

// services-modal 
const servicesOpen = document.getElementById('services-open')
const servicesClose = document.getElementById('services-close')
const servicesModal = document.querySelector('.services-modal')

servicesOpen.addEventListener('click', () => {
    servicesModal.classList.add('open-modal')
    document.body.classList.remove('nav-open')
})
servicesClose.addEventListener('click', () => {
    servicesModal.classList.remove('open-modal')
})

// portfolio-modal 
const portfolioOpen = document.getElementById('portfolio-open')
const portfolioClose = document.getElementById('portfolio-close')
const portfolioModal = document.querySelector('.portfolio-modal')

portfolioOpen.addEventListener('click', () => {
    portfolioModal.classList.add('open-modal')
    document.body.classList.remove('nav-open')
})
portfolioClose.addEventListener('click', () => {
    portfolioModal.classList.remove('open-modal')
})

// team-modal 
const teamOpen = document.getElementById('team-open')
const teamClose = document.getElementById('team-close')
const teamModal = document.querySelector('.team-modal')

teamOpen.addEventListener('click', () => {
    teamModal.classList.add('open-modal')
    document.body.classList.remove('nav-open')
})
teamClose.addEventListener('click', () => {
    teamModal.classList.remove('open-modal')
})

///--- nav menu toggle ---///

const navBurger = document.getElementById('nav-burger')

navBurger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

