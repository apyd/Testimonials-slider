const prevButtons = document.querySelectorAll('.btn--left');
const nextButtons = document.querySelectorAll('.btn--right');
const slides = document.querySelectorAll('.slide__wrapper');
let activeSlideId = 0;
 
// On DOM load show only first slider - 
// by default it's 0 but by changing activeSliderId it may start with different slide;
document.addEventListener('DOMContentLoaded', () => {
    slides.forEach((slide, i) => {
        // hide all slides beside the one with id set in activeSliderId
        i !== activeSlideId ? slides[i].style.display = 'none' : null;
    })
})

prevButtons.forEach(btn => {
    btn.addEventListener('click', switchToPreviousSlide);
});
            
nextButtons.forEach(btn => {
    btn.addEventListener('click', switchToNextSlide);
});

function switchToPreviousSlide() {
    if (activeSlideId > 0) {
        slides[activeSlideId].style.display = 'none';
        slides[activeSlideId - 1].style.display = 'flex';
        activeSlideId--;
    }
    else {
        slides[0].style.display = 'none';
        slides[slides.length - 1].style.display = 'flex';
        activeSlideId = slides.length - 1;
    }
}

function switchToNextSlide() {
    if (activeSlideId < slides.length - 1) {
        slides[activeSlideId].style.display = 'none';
        slides[activeSlideId + 1].style.display = 'flex';
        activeSlideId++;
    }
    else {
        slides[activeSlideId].style.display = 'none';
        slides[0].style.display = 'flex';
        activeSlideId = 0;
    }
}