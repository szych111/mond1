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

// team-modal
const teamOpen = document.getElementById('team-open')
const teamClose = document.getElementById('team-close')
const teamModal = document.querySelector('.team-modal')

teamOpen.addEventListener('click', () => {
    console.log('team')
    teamModal.classList.add('open-modal')
})
teamClose.addEventListener('click', () => {
    teamModal.classList.remove('open-modal')
})

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

//services-modal 
// const servicesOpen = document.getElementById('services-open')
// const servicesClose = document.getElementById('services-close')
// const servicesModal = document.querySelector('.services-modal')

// servicesOpen.addEventListener('click', () => {
//     console.log('services')
//     servicesModal.classList.add('open-modal')
// })
// servicesClose.addEventListener('click', () => {
//     servicesModal.classList.remove('open-modal')
// })