const texts = ["Designers", "Analysts", "IDT Class of '26"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const secText = document.querySelector(".sec-text");

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    secText.textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            erase();
        }, 3000);
    } else {
        setTimeout(type, 100);
    }
}

function erase() {
    letter = currentText.slice(0, --index);
    secText.textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 50);
    }
}
type();


  const sliderTrack = document.getElementById("slider-track");
  if (sliderTrack) {
    const slides = sliderTrack.children;
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
      const clone = slides[i].cloneNode(true);
      sliderTrack.appendChild(clone);
    }
  }

  const slides = document.querySelector('.slides');
  const slideImages = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slideImages.length - 1 : currentIndex - 1;
    updateSlidePosition();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slideImages.length - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
  });







