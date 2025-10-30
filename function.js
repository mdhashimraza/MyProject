let currentSlide = 0;
let slides = document.querySelectorAll(".slid");
let preBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click",function(){
    let nextSlide = (currentSlide+1)%slides.length;
    // if (slides && slides[currentSlide]) {
    //     slides[currentSlide].style.display ="none";
    // }
    slides[currentSlide].style.display ="none";
    slides[nextSlide].style.display ="block";
    currentSlide = nextSlide;
})

preBtn.addEventListener("click",function(){
    let prevSlide = currentSlide == 0 ?slides.length-1:currentSlide-1;
    // if (slides && slides[currentSlide]) {
    //     slides[currentSlide].style.display ="none";
    // }
    slides[currentSlide].style.display ="none";
    slides[prevSlide].style.display ="block";
    currentSlide = prevSlide;
})