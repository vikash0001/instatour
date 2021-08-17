const swiper = new Swiper('.swiper-container', {

  loop: true,
  autoplay:
  {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
   
    840: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1124: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  }
});


const swiper2 = new Swiper('.swiper-container-two', {

  loop: true,
  autoplay:
  {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next-two',
    prevEl: '.swiper-button-prev-two',
  },
  pagination: {
    el: '.swiper-pagination-two',
    clickable: true,
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }
});



const swiperThree = new Swiper('.swiper-container-three', {

  loop: true,

  autoplay:
  {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next-three',
    prevEl: '.swiper-button-prev-three'
  },
  pagination: {
    el: '.swiper-pagination-three',
    clickable: true
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 40,


    },
    720: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});


$('document').ready(
  function (){
    $('.menu_toggler').click(
      function(){
        $('.menu_slider').addClass("menu_slider-active")})});

$('document').ready(
  function (){
    $('.menu_slider_close_img').click(
      function(){
        $('.menu_slider').removeClass("menu_slider-active")})});

$('document').ready(function(){
   $(".includes").click(
     function(){
       $(".detail_1").slideToggle();
       $(".rot1").toggleClass("rot-active")})});

$('.document').ready(function(){
  $(".wtb").click(
    function(){
      $(".detail_2").slideToggle();
      $(".rot2").toggleClass("rot-active")})});

$('.document').ready(function(){
  $(".notes").click(
    function(){
      $(".detail_3").slideToggle();
      $(".rot3").toggleClass("rot-active")})});

$('.document').ready(function(){
  $(".faq").click(
    function(){
      $(".detail_4").slideToggle();
      $(".rot4").toggleClass("rot-active")})});

 $('document').ready(
   function(){
     $(".gallery_show-more").click(
        function() {
          $(".more_content").slideToggle();
        }
     )
   }
 )     













