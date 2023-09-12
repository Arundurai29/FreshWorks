$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      dots: true,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });

  $(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });

