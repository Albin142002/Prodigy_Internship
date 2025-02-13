// Select elements
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Initialize counter and image size
let counter = 0;
const size = carouselImages[0].clientWidth;

// Function to move slide
function moveSlide() {
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) counter = -1;
    counter++;
    moveSlide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) counter = carouselImages.length;
    counter--;
    moveSlide();
});

// Auto-slide function
setInterval(() => {
    nextBtn.click();
}, 3000); // Auto-slide every 3 seconds

// Popup functionality
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.querySelector('.close');

document.querySelectorAll('.game-image').forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImg.src = img.src;
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};
