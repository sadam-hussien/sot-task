AOS.init();

const customerSwiper = new Swiper(".customer-items .swiper", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  $(".main-header .toggle-menu").on("click", function () {
    $(".main-header .main-nav").toggleClass("active");
    $("body").toggleClass("active");
  });
});
