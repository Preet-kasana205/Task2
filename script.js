// --- Carousel Logic ---
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const slideCount = slides.length;
let counter = 0;

const slideImage = () => {
    slides.style.transform = `translateX(-${counter * 100}%)`;
};

const goNext = () => {
    counter++;
    if (counter >= slideCount) {
        counter = 0; // Loop to the first slide
    }
    slideImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slideCount - 1; // Loop to the last slide
    }
    slideImage();
};


