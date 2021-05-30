// const bounce = document.querySelector(".bounce-img-3");
// // const bounces = document.querySelector(".bounces");
// bounce.addEventListener("mousemove", (e) => {
//   bounce.left = "50px";
//   // bounce.animation = "1s bounceBlur1 100s";
// });


const firstSliderButPrev = document.querySelector(".slider-first__button--prev");
const firstSliderButNext = document.querySelector(".slider-first__button--next");
let fDisp = document.getElementsByClassName("fdisplay__item");
var slideIndex = 1;
showDivs(slideIndex);






firstSliderButPrev.addEventListener("click", () => {
  if (slideIndex==1)
  {showDivs(7)} else
  showDivs(slideIndex-1);
});
firstSliderButNext.addEventListener("click", () => {
  
  if (slideIndex==6) {showDivs(1);} else {showDivs(slideIndex+1);}
});





function showDivs(n) {

  let i;
  let x = document.getElementsByClassName("slider-first__item");
  switch (n) {
    case (n > x.length): {
      slideIndex = 1; 
      n = 1;
      break;
    }
    case (7): {
      slideIndex = x.length; 
      n = x.length;
      break;
    }
    case (0): {
      slideIndex = 1; 
      n = 1;
      break;
    }
    case (1): {
      slideIndex = n;
      break;
    }
    case (2): {
      // n = n;
      slideIndex = n;
      break;
    }
    case (3): {
      // n = n;
      slideIndex = n;
      break;
    }
    case (4): {
      // n = n;
      slideIndex = n;
      break;
    }
    case (5): {
      // n = n;
      slideIndex = n;
      break;
    }
    case (6): {
      // n = n;
      slideIndex = n;
      break;
    }
  }
  for (i = 0; i < x.length; i++) {
    fDisp[i].classList.remove("fdisplay__item--active");
    x[i].style.display = "none";
    
    
  }
 fDisp[n-1].classList.add("fdisplay__item--active");
  x[slideIndex-1].style.display = "flex";
}



//узнаю, на какой по счету кликнули fdisp
const fDisp1 = document.querySelector(".fdisp1");
fDisp1.addEventListener("click", function(e) {
  showDivs(1);
});
const fDisp2 = document.querySelector(".fdisp2");
fDisp2.addEventListener("click", function(e) {
  showDivs(2);
});
const fDisp3 = document.querySelector(".fdisp3");
fDisp3.addEventListener("click", function(e) {
  showDivs(3);
});
const fDisp4 = document.querySelector(".fdisp4");
fDisp4.addEventListener("click", function(e) {
  showDivs(4);
});
const fDisp5 = document.querySelector(".fdisp5");
fDisp5.addEventListener("click", function(e) {
  showDivs(5);
});
const fDisp6 = document.querySelector(".fdisp6");
fDisp6.addEventListener("click", function(e) {
  showDivs(6);
});












var swiper = new Swiper(".mySwiper", {
  effect: "slide",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  loop: true,
  // autoplay: {
  //   speed: 2000,
  //   delay: 700,
  //   disableOnInteraction: false,
  // },
  speed: 2000,
  sumulateTouch: false,
  pagination: {
    el: ".swiper-pag",
    clickable: true,
  },
  // mousewheel: {
  //   sensitivity: 1,
  // },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
});


/// остановка автопрокрутки при наведении на слайд
const sliderRight = document.querySelector(".slider__right");
sliderRight.addEventListener("mouseenter", function (e) {
  swiper.params.autoplay.disableOnInteraction = false;
  swiper.params.autoplay.delay = 700;
  swiper.params.autoplay.reverseDirection = 1;
  swiper.autoplay.start();
});
sliderRight.addEventListener("mouseleave", function (e) {
  swiper.autoplay.stop();
})


const sliderLeft = document.querySelector(".slider__left");
sliderLeft.addEventListener("mouseenter", function (e) {
  swiper.params.autoplay.disableOnInteraction = false;
  swiper.params.autoplay.delay = 700;
  swiper.params.autoplay.reverseDirection = 0;
  swiper.autoplay.start();

});
sliderLeft.addEventListener("mouseleave", function (e) {
  swiper.autoplay.stop();
})


////   



// var swiperBack = new Swiper(".mySwiperBack", {
//   effect: "slide",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   // coverflowEffect: {
//   //   rotate: 50,
//   //   stretch: 0,
//   //   depth: 100,
//   //   modifier: 1,
//   //   slideShadows: true,
//   // },
//   loop: true,
//   // autoplay: {
//   //   speed: 2000,
//   //   delay: 700,
//   //   disableOnInteraction: false,
//   // },
//   speed: 2000,
//   sumulateTouch: false,
//   pagination: {
//     el: ".swiper-pag",
//     clickable: true,
//   },
//   // mousewheel: {
//   //   sensitivity: 1,
//   // },
//   preloadImages: false,
//   lazy: {
//     loadOnTransitionStart: false,
//     loadPrevNext: true,
//   },
//   watchSlidesProgress: false,
//   watchSlidesVisibility: false,
// });
// swiper.controller.control = swiperBack;
// // swiperBack.controller.control = swiper;