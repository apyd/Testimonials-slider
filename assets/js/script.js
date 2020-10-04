const prevButtons = document.querySelectorAll('.btn--left');
const nextButtons = document.querySelectorAll('.btn--right');
const slides = document.querySelectorAll('.slider__container');
let activeSlideId = 0;
 
// On DOM load show only first slider - 
// by default it's 0 but by changing activeSliderId it may start with different slide;
document.addEventListener('DOMContentLoaded', () => {
    slides.forEach((slide, i) => {
        // add id number to each slider container
        slide.dataset.slideId = i;
        // hide all slides beside the one with id set in activeSliderId
        i !== activeSlideId ? slides[i].style.display = 'none' : null;
    })
})
prevButtons.forEach(btn => {
    btn.addEventListener('click', (e) => switchToPreviousSlide(+e.path[4].dataset.slideId));
});
            
nextButtons.forEach(btn => {
    btn.addEventListener('click', (e) => switchToNextSlide(+e.path[4].dataset.slideId));
});

function switchToPreviousSlide(slideId) {
    if (activeSlideId > 0) {
        slides[activeSlideId].style.display = 'none';
        slides[slideId - 1].style.display = 'flex';
        activeSlideId--;
    }
    else {
        slides[0].style.display = 'none';
        slides[slides.length - 1].style.display = 'flex';
        activeSlideId = slides.length - 1;
    }
}

function switchToNextSlide(slideId) {
    if (activeSlideId < slides.length - 1) {
        slides[activeSlideId].style.display = 'none';
        slides[slideId + 1].style.display = 'flex';
        activeSlideId++;
    }
    else {
        slides[activeSlideId].style.display = 'none';
        slides[0].style.display = 'flex';
        activeSlideId = 0;
    }
}