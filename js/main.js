
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
    // x[slideIndex-1].style.opacity = "0";
    // x[i].classList.remove("slider-first__item--active");
    
  }
 fDisp[n-1].classList.add("fdisplay__item--active");
  x[slideIndex-1].style.display = "flex";
  // x[slideIndex-1].style.transition = "opacity .4s";
  // x[slideIndex-1].style.opacity = "1";
  // x[slideIndex-1].classList.add("slider-first__item--active");

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



var swiperWhy = new Swiper(".mySwiperWhy", {
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
  autoplay: {
    speed: 1000,
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  sumulateTouch: false,
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



const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-repeat")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);

}



window.onload = function () {
  const first = document.querySelector(".first");
  const parallax = document.querySelector(".parallax");
  const bounceBlur1 = document.querySelector(".bounce-blur-1");
    const bounceBlur2 = document.querySelector(".bounce-blur-2");
    const bounceBlur3 = document.querySelector(".bounce-blur-3");
    const bounceImg1 = document.querySelector(".bounce-img-1");
    const bounceImg2 = document.querySelector(".bounce-img-2");
    const bounceImg3 = document.querySelector(".bounce-img-3");
    const bounceImg4 = document.querySelector(".bounce-img-4");
    const bounceImg5 = document.querySelector(".bounce-img-5");

  first.addEventListener("mousemove", parallaxGo);
  function parallaxGo(e) {
    this.querySelectorAll(".bounce").forEach(bounce => {
      const speed = bounce.getAttribute('data-speed');
      // const dataX = bounce.getAttribute('data-x');
      const x = (window.innerWidth - e.pageX*speed)/100;
      const y = (window.innerHeight - e.pageY*speed)/100;
      bounce.style.transform = `translateX(${x}px) translateY(${y}px)`;
      bounce.style.transition = ".4s";
      
    });
    const speed = parallax.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;
    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }
  first.addEventListener("mousestop", parallaxStop);
  function parallaxStop(e) {
    this.querySelectorAll(".bounce").forEach(bounce => {
      // const speed = bounce.getAttribute('data-speed');
      // // const dataX = bounce.getAttribute('data-x');
      // const x = (window.innerWidth - e.pageX*speed)/100;
      // const y = (window.innerHeight - e.pageY*speed)/100;
      // bounce.style.transform = `translateX(${x}px) translateY(${y}px)`;
      bounce.style.transition = ".4s";
      
    });
    // const speed = parallax.getAttribute('data-speed');
    // const x = (window.innerWidth - e.pageX*speed)/100;
    // const y = (window.innerHeight - e.pageY*speed)/100;
    // parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }

















  const services = document.querySelector(".services");
  const parallaxServices = document.querySelector(".parallax-services");
  
    const bounceImg3Services = document.querySelector(".bounce-img-3--services");
    const bounceImg4Services = document.querySelector(".bounce-img-4--services");
    const bounceImg5Services = document.querySelector(".bounce-img-5--services");

  services.addEventListener("mousemove", parallaxServicesGo);
  function parallaxServicesGo(e) {
    this.querySelectorAll(".bounce--services").forEach(bounce => {
      const speed = bounce.getAttribute('data-speed');
      // const dataX = bounce.getAttribute('data-x');
      const x = (window.innerWidth - e.pageX*speed)/200;
      const y = (window.innerHeight - e.pageY*speed)/200;
      bounce.style.transform = `translateX(${x}px) translateY(${y}px)`;
      bounce.style.transition = ".4s";
      
    });
  }
  


}