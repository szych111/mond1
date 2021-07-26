///--- portfolio gallery ---///
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
let slides = document.getElementsByClassName("portfolio-pics");
let demo = document.getElementsByClassName("demo"); 
let slideIndex = 0;

galleryNext.addEventListener("click", () => {
    console.log("klik");
    console.log(slides.length);
    console.log(slideIndex);
    slideIndex += 1;
    if (slideIndex > slides.length) {
        slideIndex = 0;
    }
})

showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    console.log('klik');
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("portfolio-pics");
    const dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

