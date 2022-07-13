const slideSmartphone = document.querySelector('.slider-item-smartphone');
const sliderMonitor = document.querySelector('.slider-item-monitor');
const sliderTablet = document.querySelector('.slider-item-tablet');
const btnSliderOne = document.querySelector('.btn-slider-1');
const btnSliderTwo = document.querySelector('.btn-slider-2');
const btnSliderThree = document.querySelector('.btn-slider-3');

btnSliderOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideSmartphone.classList.add('slide-current');
    sliderMonitor.classList.remove('slide-current');
    sliderTablet.classList.remove('slide-current');
    btnSliderOne.classList.add('current');
    btnSliderTwo.classList.remove('current');
    btnSliderThree.classList.remove('current');
});

btnSliderTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideSmartphone.classList.remove('slide-current');
    sliderMonitor.classList.add('slide-current');
    sliderTablet.classList.remove('slide-current');
    btnSliderOne.classList.remove('current');
    btnSliderTwo.classList.add('current');
    btnSliderThree.classList.remove('current');
});

btnSliderThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    slideSmartphone.classList.remove('slide-current');
    sliderMonitor.classList.remove('slide-current');
    sliderTablet.classList.add('slide-current');
    btnSliderOne.classList.remove('current');
    btnSliderTwo.classList.remove('current');
    btnSliderThree.classList.add('current');
});