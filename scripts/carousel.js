// carousel //

export function initCarousel(containerSlides, slides) {
  const prevSlide = containerSlides.querySelector(".left-slide");
  const nextSlide = containerSlides.querySelector(".right-slide");
  const totalSlides = slides.length;
  let index = 0;

  function changeActive() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
  }

  nextSlide.onclick = function () {
    next();
    changeActive();
  };

  prevSlide.onclick = function () {
    prev();
    changeActive();
  };

  function next() {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  }

  function prev() {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
}

// carousel //
