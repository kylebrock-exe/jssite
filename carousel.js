const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children); 
const nextButton = document.querySelector('.carousel_button-right') ;
const prevButton = document.querySelector('.carousel_button-left') ;

const slideWidth = slides[0].getBoundingClientRect().width;

//Arrange Slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

}

//Move Slide Left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
  
    moveToSlide(track, currentSlide, prevSlide);
});

 //Move Slide Right
 nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
  
    moveToSlide(track, currentSlide, nextSlide);
 });