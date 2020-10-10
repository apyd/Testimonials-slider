const prevButtons = document.querySelectorAll('.btn--left');
const nextButtons = document.querySelectorAll('.btn--right');
const slides = document.querySelectorAll('.slide__wrapper');
let activeSlideId = 0;
slides[activeSlideId].classList.add('loading');
 
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
        slides[activeSlideId].classList.remove('loading');
        slides[activeSlideId - 1].style.display = 'flex';
        slides[activeSlideId - 1].classList.add('loading');
        activeSlideId--;
    }
    else {
        slides[0].style.display = 'none';
        slides[0].classList.remove('loading');
        slides[slides.length - 1].style.display = 'flex';
        slides[slides.length - 1].classList.add('loading');
        activeSlideId = slides.length - 1;
    }
}

function switchToNextSlide() {
    if (activeSlideId < slides.length - 1) {
        slides[activeSlideId].style.display = 'none';
        slides[activeSlideId].classList.remove('loading');
        slides[activeSlideId + 1].style.display = 'flex';
        slides[activeSlideId + 1].classList.add('loading');
        activeSlideId++;
    }
    else {
        slides[activeSlideId].style.display = 'none';
        slides[activeSlideId].classList.remove('loading');
        slides[0].style.display = 'flex';
        slides[0].classList.add('loading');
        activeSlideId = 0;
    }
}