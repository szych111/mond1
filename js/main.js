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

//modal 

const closeBtn = document.querySelector('.close-btn')
const contactModal = document.querySelector('.modal');

closeBtn.addEventListener('click', () => {
    contactModal.classList.add('close-modal')
})
