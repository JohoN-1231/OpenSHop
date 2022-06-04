var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swipers = new Swiper(".mySwipers", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiperes = new Swiper(".mySwiperes", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
});
