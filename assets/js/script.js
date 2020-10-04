const prevButtons = document.querySelectorAll('.btn--left');
const nextButtons = document.querySelectorAll('.btn--right');
const sliders = document.querySelectorAll('.slider__container');

// On website load show only first slider
document.addEventListener('DOMContentLoaded', () => {
    sliders[1].style.display = 'none';
})

// add id to each slider container 
sliders.forEach((slider, i) => slider.dataset.slideId = i)

// on previous button click hide current slide and show previous
prevButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const slideId = +e.path[4].dataset.slideId;
        if (slideId <= 0) return;
        else {
            sliders[slideId].style.display = 'none';
            sliders[slideId-1].style.display = 'flex';
        }
    })
});

// on next button click hide current slide and show next
nextButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const slideId = +e.path[4].dataset.slideId;
        if (slideId >= sliders.length - 1) return;
        else {
            sliders[slideId].style.display = 'none';
            sliders[slideId+1].style.display = 'flex';
        }
    })
})


