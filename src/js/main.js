
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



const sliderBackMask = document.querySelector(".slider__back-mask");

// functionDetect();







var swiper = new Swiper(".mySwiper", {
  effect: "slide",
  // navigation: {
  //   nextEl: ".slider__nav-right",
  //   prevEl: ".slider__nav-left"
  // },
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
  // loop: true,
  // autoplay: {
  //   speed: 2000,
  //   delay: 700,
  //   disableOnInteraction: false,
  // },
  speed: 1500,
  sumulateTouch: true,
  pagination: {
    el: ".swiper-pag",
    clickable: true,
  },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  on: {
    init: function () {
      console.log('swiper initialized');

    },
  },
 
});

// if (widthW<1000) {
//   swiper.params.speed = 800;
// } else {
//   swiper.params.speed = 2000;
// }
const widthW = document.documentElement.clientWidth;

if (widthW<1000) {
  swiper.params.speed = 600;
} else {
  swiper.params.speed = 1500;
}
window.addEventListener("resize", function (e) {
const widthW = document.documentElement.clientWidth;

  if (widthW<1000) {
      swiper.params.speed = 600;
    } else {
      swiper.params.speed = 1500;
    }
});

/// остановка автопрокрутки при наведении на слайд
const sliderRight = document.querySelector(".slider__right");
sliderRight.addEventListener("mouseenter", function (e) {
  // swiper.params.speed = 2000;
  swiper.params.autoplay.disableOnInteraction = false;
    swiper.params.autoplay.delay = 500;
    swiper.params.autoplay.reverseDirection = 0;
    swiper.params.autoplay.stopOnLastSlide = true;
    swiper.autoplay.start();
});
sliderRight.addEventListener("mouseleave", function (e) {
  swiper.autoplay.stop();
})


const sliderLeft = document.querySelector(".slider__left");
sliderLeft.addEventListener("mouseenter", function (e) {
  // swiper.params.speed = 2000;
  swiper.params.autoplay.disableOnInteraction = false;
  swiper.params.autoplay.delay = 500;
  swiper.params.autoplay.reverseDirection = 1;
  swiper.params.autoplay.stopOnLastSlide = true;

  swiper.autoplay.start();

});
sliderLeft.addEventListener("mouseleave", function (e) {
  swiper.autoplay.stop();
})








// function functionDetect() { 
// //   if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
// //  {
// //      alert('Opera');
// //  }
// //  else if(navigator.userAgent.indexOf("Chrome") != -1 )
// //  {
// //      alert('Chrome');
// //  }
// //  else if(navigator.userAgent.indexOf("Safari") != -1)
// //  {
// //      alert('Safari');
// //  }
// //  else
//   if(navigator.userAgent.indexOf("Firefox") != -1 ) 
//  {
//   // sliderBackMask.classList.add("._firefox");
//   // sliderBackMask.style.top = "40%";
//   // sliderBackMask.style.transform = "translateY(0)";
//   swiper.on('slideChange', function () {
//     sliderBackMask.style.top = "40%";
//     sliderBackMask.style.transform = "translateY(0)";
//   } );
//  }
// //  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
// //  {
// //    alert('IE'); 
// //  }  
// //  else 
// //  {
// //     alert('unknown');
// //  }
//  }













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








window.onload = function () {
  // const first = document.querySelector(".first");
  // const parallax = document.querySelector(".parallax");
  // const bounceBlur1 = document.querySelector(".bounce-blur-1");
  //   const bounceBlur2 = document.querySelector(".bounce-blur-2");
  //   const bounceBlur3 = document.querySelector(".bounce-blur-3");
  //   const bounceImg1 = document.querySelector(".bounce-img-1");
  //   const bounceImg2 = document.querySelector(".bounce-img-2");
  //   const bounceImg3 = document.querySelector(".bounce-img-3");
  //   const bounceImg4 = document.querySelector(".bounce-img-4");
  //   const bounceImg5 = document.querySelector(".bounce-img-5");

  // first.addEventListener("mousemove", parallaxGo);
  // function parallaxGo(e) {
  //   // this.querySelectorAll(".bounce").forEach(bounce => {
  //   //   const speed = bounce.getAttribute('data-speed');
  //   //   const x = (window.innerWidth - e.pageX*speed)/100;
  //   //   const y = (window.innerHeight - e.pageY*speed)/100;
  //   //   bounce.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   //   bounce.style.transition = ".4s";
      
  //   // });
  //   const speed = parallax.getAttribute('data-speed');
  //   const x = (window.innerWidth - e.pageX*speed)/100;
  //   const y = (window.innerHeight - e.pageY*speed)/100;
  //   parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  // }
  // first.addEventListener("mousestop", parallaxStop);
  // function parallaxStop(e) {
  //   // this.querySelectorAll(".bounce").forEach(bounce => {
  //   //   bounce.style.transition = ".4s";
      
  //   // });
  // }


//   const bounceImg1 = document.querySelector(".bounce-img-1");
//     const bounceImg2 = document.querySelector(".bounce-img-2");
//     const bounceImg3 = document.querySelector(".bounce-img-3");
//     const bounceImg4 = document.querySelector(".bounce-img-4");
//     const bounceImg5 = document.querySelector(".bounce-img-5");
//     bounceImg1.addEventListener("mouseenter", getBounce(bounceImg1));
//     bounceImg2.addEventListener("mouseover", getBounce(bounceImg2));
//     bounceImg3.addEventListener("mouseenter", getBounce(bounceImg3));
//     bounceImg4.addEventListener("mouseenter", getBounce(bounceImg4));
//     bounceImg5.addEventListener("mouseenter", getBounce(bounceImg5));
//     function getBounce(bounce) {
//       bounce.style = "bottom: `${getRandomInt(0,150)}`px";
//       console.log(bounce);
//       // bounce.style = "bottom: getRandomInt(${0,150})px";
//       // bounce.listStyle.left = `getRandomInt(${0,150})px`;
//     }
// //   $(this).css({
// //     top: getRandomInt(0, 150)+"px",
// //     left: getRandomInt(0, 150)+"px"
// // });

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }



// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// $(".bounce-img-1").hover(function () { 
//   $(this).css({
//       left: 88 + getRandomInt(0, 5)+"%",
//       bottom: 8 + getRandomInt(0, 5)+"%"
//   });
// }, function () { });


// $(".bounce-img-2").hover(function () { 
//   $(this).css({
//     left: 89 + getRandomInt(0, 10)+"%",
//     bottom: 79 + getRandomInt(0, 10)+"%"
//   });
// }, function () { });


// $(".bounce-img-3").hover(function () { 
//   $(this).css({
//     left: 56 + getRandomInt(0, 30)+"%",
//     bottom: 36 + getRandomInt(0, 30)+"%"
//   });
// }, function () { });


// $(".bounce-img-4").hover(function () { 
//   const left = $(".bounce-img-4").css.left;
//   const bottom =  $(".bounce-img-4").css.bottom;
//   $(this).css({
//     left: 56 + getRandomInt(0, 40)+"%",
//     bottom: 36 + getRandomInt(0, 40)+"%"
//   });
// }, function () { });


// $(".bounce-img-5").hover(function () { 
//   $(this).css({
//     left: 38 + getRandomInt(0, 55)+"%%",
//     bottom: 78 + getRandomInt(0, 55)+"%"
//   });
// }, function () { });









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






  let player;
  let currentVolume = 10;
  // function onYouTubeIframeAPIReady() {
  //   player = new YT.Player('yt-player', {
  //     height: '360',
  //     widht: '640',
  //     // playerVars: {
  //     //   // controls: 0,
  //     //   disablekb: 0,
  //     //   showinfo: 0,
  //     //   rel: 0,
  //     //   autoplay: 0,
  //     //   modestranding: 0
  //     // },
  //     videoId: '5M8ft-3vDC8'
  //     // events: {
  //     //   'onReady': onPlayerReady,
  //     //   'onStateChange': onPlayerStateChange
  //     // }
  //   });
  // }
  // function onYouTubeIframeAPIReady() {
  //   player = new YT.Player("player", {
  //     height: '360',
  //     width: '640',
  //     videoId: '5M8ft-3vDC8',
  //     // events: {
  //     //   'onReady': onPlayerReady,
  //     //   'onStateChange': onPlayerStateChange
  //     // }
  //     playerVars: {
  //       //   // controls: 0,
  //       //   disablekb: 0,
  //         showinfo: 0,
  //         rel: 0,
  //         autoplay: 0,
  //         modestranding: 0
  //       }
  //   });
  // }