// Select your swiper container
var swiperContainer = document.querySelector('.swiper-container.two');

// Count the number of slides
var numSlides = swiperContainer.querySelectorAll('.swiper-slide').length;

// Calculate the initial slide index
var initialSlide = Math.max(Math.floor(numSlides / 2), 0); // Start at the middle slide
// Initialize Swiper
var swiper = new Swiper(swiperContainer, {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    initialSlide: initialSlide, // Set the calculated initial slide index
});
