const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
let autoPlayInterval;
const intervalTime = 3000; // Switches every 3 seconds

// Generate dots matching slide length
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
            dots[index].classList.add('active');
        } else {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, intervalTime);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Controls
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

// Boot up auto-play
startAutoPlay();
