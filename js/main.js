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

// team-modal
// const teamOpen = document.getElementById('team-open')
// const teamClose = document.querySelector('.team-close')
// const teamModal = document.querySelector('.team-modal')

// teamOpen.addEventListener('click', () => {
//     console.log('team')
//     teamModal.classList.add('open-modal')
// });
// teamClose.addEventListener('click', () => {
//     console.log('klik');
//     teamModal.classList.remove('open-modal')
// })

//contact-modal 
const openContact = document.getElementById('contact-open')
const contactClose = document.getElementById('contact-close')
const contactModal = document.querySelector('.contact-modal')

openContact.addEventListener('click', () => {
    console.log('contact')
    contactModal.classList.add('open-modal')
})
contactClose.addEventListener('click', () => {
    contactModal.classList.remove('open-modal')
})

// services-modal 
const servicesOpen = document.getElementById('services-open')
const servicesClose = document.getElementById('services-close')
const servicesModal = document.querySelector('.services-modal')

servicesOpen.addEventListener('click', () => {
    console.log('services')
    servicesModal.classList.add('open-modal')
})
servicesClose.addEventListener('click', () => {
    servicesModal.classList.remove('open-modal')
})