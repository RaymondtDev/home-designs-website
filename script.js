const menu = document.getElementById('menu');

function toggleMenu() {
  menu.classList.toggle('active');
}

// image carousel script

let currentIndex = 0;

const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".slider-img");
const totalImages = images.length;

function updateCarousel() {
  currentIndex++;

  if (currentIndex === totalImages) {
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    currentIndex = 0;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => { carousel.style.transition = 'transform 0.5s ease-in-out'; });
    });
  } else {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
}

setInterval(updateCarousel, 3000);

