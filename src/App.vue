<script setup>
import { ref, onMounted } from "vue";

let myCarousel = ref("");
let carouselIndicators = ref("");
let carousel = ref("");
onMounted(() => {
  myCarousel = document.getElementById("carouselExampleIndicators");
  console.log("myCarousel", myCarousel);
  carouselIndicators = myCarousel.querySelectorAll(
    ".carousel-indicators button span"
  );
  console.log("carouselIndicators", carouselIndicators);
  let intervalID;
  carousel = new bootstrap.Carousel(myCarousel);
  console.log("carousel", carousel);
  window.addEventListener("load", function () {
    fillCarouselIndicator(1);
  });
  myCarousel.addEventListener("slide.bs.carousel", function (e) {
    let index = e.to;
    fillCarouselIndicator(++index);
  });
  function fillCarouselIndicator(index) {
    let i = 0;
    for (const carouselIndicator of carouselIndicators) {
      carouselIndicator.style.width = 0;
    }
    clearInterval(intervalID);
    carousel.pause();

    intervalID = setInterval(function () {
      i++;

      myCarousel.querySelector(
        ".carousel-indicators .active span"
      ).style.width = i + "%";

      if (i >= 100) {
        // i = 0; -> just in case
        carousel.next();
      }
    }, 50);
  }
});
</script>

<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-pause="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      >
        <span></span>
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      >
        <span></span>
      </button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      >
        <span></span>
      </button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://assets.codepen.io/162656/bs-carousel1.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://assets.codepen.io/162656/bs-carousel2.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://assets.codepen.io/162656/bs-carousel3.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style>
.carousel-indicators [data-bs-target] {
  position: relative;
  width: 60px;
  height: 6px;
  border: none;
  border-radius: 24px;
}
.carousel-indicators [data-bs-target] span {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #7952b3;
  border-radius: inherit;
}
</style>
