// slider
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.butt-kr');
const nextButton = document.querySelector('.butt-gl');
const slides = Array.from(slider.querySelectorAll('.promo-inner'));
const slideCount = slides.length;
let slideIndex = 0;
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();

