
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBmaXJzdFNsaWRlckJ1dFByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1maXJzdF9fYnV0dG9uLS1wcmV2XCIpO1xyXG5jb25zdCBmaXJzdFNsaWRlckJ1dE5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1maXJzdF9fYnV0dG9uLS1uZXh0XCIpO1xyXG5sZXQgZkRpc3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmRpc3BsYXlfX2l0ZW1cIik7XHJcbnZhciBzbGlkZUluZGV4ID0gMTtcclxuc2hvd0RpdnMoc2xpZGVJbmRleCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZpcnN0U2xpZGVyQnV0UHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChzbGlkZUluZGV4PT0xKVxyXG4gIHtzaG93RGl2cyg3KX0gZWxzZVxyXG4gIHNob3dEaXZzKHNsaWRlSW5kZXgtMSk7XHJcbn0pO1xyXG5maXJzdFNsaWRlckJ1dE5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBcclxuICBpZiAoc2xpZGVJbmRleD09Nikge3Nob3dEaXZzKDEpO30gZWxzZSB7c2hvd0RpdnMoc2xpZGVJbmRleCsxKTt9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dEaXZzKG4pIHtcclxuXHJcbiAgbGV0IGk7XHJcbiAgbGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVyLWZpcnN0X19pdGVtXCIpO1xyXG4gIHN3aXRjaCAobikge1xyXG4gICAgY2FzZSAobiA+IHgubGVuZ3RoKToge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMTsgXHJcbiAgICAgIG4gPSAxO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgKDcpOiB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSB4Lmxlbmd0aDsgXHJcbiAgICAgIG4gPSB4Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICgwKToge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMTsgXHJcbiAgICAgIG4gPSAxO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgKDEpOiB7XHJcbiAgICAgIHNsaWRlSW5kZXggPSBuO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgKDIpOiB7XHJcbiAgICAgIC8vIG4gPSBuO1xyXG4gICAgICBzbGlkZUluZGV4ID0gbjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICgzKToge1xyXG4gICAgICAvLyBuID0gbjtcclxuICAgICAgc2xpZGVJbmRleCA9IG47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAoNCk6IHtcclxuICAgICAgLy8gbiA9IG47XHJcbiAgICAgIHNsaWRlSW5kZXggPSBuO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgKDUpOiB7XHJcbiAgICAgIC8vIG4gPSBuO1xyXG4gICAgICBzbGlkZUluZGV4ID0gbjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICg2KToge1xyXG4gICAgICAvLyBuID0gbjtcclxuICAgICAgc2xpZGVJbmRleCA9IG47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgZkRpc3BbaV0uY2xhc3NMaXN0LnJlbW92ZShcImZkaXNwbGF5X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICB4W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIC8vIHhbc2xpZGVJbmRleC0xXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAvLyB4W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZXItZmlyc3RfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIFxyXG4gIH1cclxuIGZEaXNwW24tMV0uY2xhc3NMaXN0LmFkZChcImZkaXNwbGF5X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgeFtzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAvLyB4W3NsaWRlSW5kZXgtMV0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAuNHNcIjtcclxuICAvLyB4W3NsaWRlSW5kZXgtMV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gIC8vIHhbc2xpZGVJbmRleC0xXS5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWZpcnN0X19pdGVtLS1hY3RpdmVcIik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8v0YPQt9C90LDRjiwg0L3QsCDQutCw0LrQvtC5INC/0L4g0YHRh9C10YLRgyDQutC70LjQutC90YPQu9C4IGZkaXNwXHJcbmNvbnN0IGZEaXNwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3AxXCIpO1xyXG5mRGlzcDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cygxKTtcclxufSk7XHJcbmNvbnN0IGZEaXNwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3AyXCIpO1xyXG5mRGlzcDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cygyKTtcclxufSk7XHJcbmNvbnN0IGZEaXNwMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3AzXCIpO1xyXG5mRGlzcDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cygzKTtcclxufSk7XHJcbmNvbnN0IGZEaXNwNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3A0XCIpO1xyXG5mRGlzcDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cyg0KTtcclxufSk7XHJcbmNvbnN0IGZEaXNwNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3A1XCIpO1xyXG5mRGlzcDUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cyg1KTtcclxufSk7XHJcbmNvbnN0IGZEaXNwNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmRpc3A2XCIpO1xyXG5mRGlzcDYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBzaG93RGl2cyg2KTtcclxufSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHNsaWRlckJhY2tNYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2JhY2stbWFza1wiKTtcclxuXHJcbi8vIGZ1bmN0aW9uRGV0ZWN0KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlclwiLCB7XHJcbiAgZWZmZWN0OiBcInNsaWRlXCIsXHJcbiAgLy8gbmF2aWdhdGlvbjoge1xyXG4gIC8vICAgbmV4dEVsOiBcIi5zbGlkZXJfX25hdi1yaWdodFwiLFxyXG4gIC8vICAgcHJldkVsOiBcIi5zbGlkZXJfX25hdi1sZWZ0XCJcclxuICAvLyB9LFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgLy8gY292ZXJmbG93RWZmZWN0OiB7XHJcbiAgLy8gICByb3RhdGU6IDUwLFxyXG4gIC8vICAgc3RyZXRjaDogMCxcclxuICAvLyAgIGRlcHRoOiAxMDAsXHJcbiAgLy8gICBtb2RpZmllcjogMSxcclxuICAvLyAgIHNsaWRlU2hhZG93czogdHJ1ZSxcclxuICAvLyB9LFxyXG4gIC8vIGxvb3A6IHRydWUsXHJcbiAgLy8gYXV0b3BsYXk6IHtcclxuICAvLyAgIHNwZWVkOiAyMDAwLFxyXG4gIC8vICAgZGVsYXk6IDcwMCxcclxuICAvLyAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAvLyB9LFxyXG4gIHNwZWVkOiAxNTAwLFxyXG4gIHN1bXVsYXRlVG91Y2g6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLnN3aXBlci1wYWdcIixcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gIGxhenk6IHtcclxuICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXHJcbiAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgfSxcclxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcclxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxyXG4gIG9uOiB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzd2lwZXIgaW5pdGlhbGl6ZWQnKTtcclxuXHJcbiAgICB9LFxyXG4gIH0sXHJcbiBcclxufSk7XHJcblxyXG4vLyBpZiAod2lkdGhXPDEwMDApIHtcclxuLy8gICBzd2lwZXIucGFyYW1zLnNwZWVkID0gODAwO1xyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIHN3aXBlci5wYXJhbXMuc3BlZWQgPSAyMDAwO1xyXG4vLyB9XHJcbmNvbnN0IHdpZHRoVyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbmlmICh3aWR0aFc8MTAwMCkge1xyXG4gIHN3aXBlci5wYXJhbXMuc3BlZWQgPSA2MDA7XHJcbn0gZWxzZSB7XHJcbiAgc3dpcGVyLnBhcmFtcy5zcGVlZCA9IDE1MDA7XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKGUpIHtcclxuY29uc3Qgd2lkdGhXID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICBpZiAod2lkdGhXPDEwMDApIHtcclxuICAgICAgc3dpcGVyLnBhcmFtcy5zcGVlZCA9IDYwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3aXBlci5wYXJhbXMuc3BlZWQgPSAxNTAwO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vLyDQvtGB0YLQsNC90L7QstC60LAg0LDQstGC0L7Qv9GA0L7QutGA0YPRgtC60Lgg0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINGB0LvQsNC50LRcclxuY29uc3Qgc2xpZGVyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fcmlnaHRcIik7XHJcbnNsaWRlclJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gc3dpcGVyLnBhcmFtcy5zcGVlZCA9IDIwMDA7XHJcbiAgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheSA9IDUwMDtcclxuICAgIHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucmV2ZXJzZURpcmVjdGlvbiA9IDA7XHJcbiAgICBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSA9IHRydWU7XHJcbiAgICBzd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcclxufSk7XHJcbnNsaWRlclJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcclxufSlcclxuXHJcblxyXG5jb25zdCBzbGlkZXJMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2xlZnRcIik7XHJcbnNsaWRlckxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyBzd2lwZXIucGFyYW1zLnNwZWVkID0gMjAwMDtcclxuICBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uID0gZmFsc2U7XHJcbiAgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheSA9IDUwMDtcclxuICBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24gPSAxO1xyXG4gIHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlID0gdHJ1ZTtcclxuXHJcbiAgc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCk7XHJcblxyXG59KTtcclxuc2xpZGVyTGVmdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZnVuY3Rpb25EZXRlY3QoKSB7IFxyXG4vLyAvLyAgIGlmKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ09QUicpKSAhPSAtMSApIFxyXG4vLyAvLyAge1xyXG4vLyAvLyAgICAgIGFsZXJ0KCdPcGVyYScpO1xyXG4vLyAvLyAgfVxyXG4vLyAvLyAgZWxzZSBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgIT0gLTEgKVxyXG4vLyAvLyAge1xyXG4vLyAvLyAgICAgIGFsZXJ0KCdDaHJvbWUnKTtcclxuLy8gLy8gIH1cclxuLy8gLy8gIGVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9IC0xKVxyXG4vLyAvLyAge1xyXG4vLyAvLyAgICAgIGFsZXJ0KCdTYWZhcmknKTtcclxuLy8gLy8gIH1cclxuLy8gLy8gIGVsc2VcclxuLy8gICBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9IC0xICkgXHJcbi8vICB7XHJcbi8vICAgLy8gc2xpZGVyQmFja01hc2suY2xhc3NMaXN0LmFkZChcIi5fZmlyZWZveFwiKTtcclxuLy8gICAvLyBzbGlkZXJCYWNrTWFzay5zdHlsZS50b3AgPSBcIjQwJVwiO1xyXG4vLyAgIC8vIHNsaWRlckJhY2tNYXNrLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwKVwiO1xyXG4vLyAgIHN3aXBlci5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBzbGlkZXJCYWNrTWFzay5zdHlsZS50b3AgPSBcIjQwJVwiO1xyXG4vLyAgICAgc2xpZGVyQmFja01hc2suc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCI7XHJcbi8vICAgfSApO1xyXG4vLyAgfVxyXG4vLyAvLyAgZWxzZSBpZigobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPSAtMSApIHx8ICghIWRvY3VtZW50LmRvY3VtZW50TW9kZSA9PSB0cnVlICkpIC8vSUYgSUUgPiAxMFxyXG4vLyAvLyAge1xyXG4vLyAvLyAgICBhbGVydCgnSUUnKTsgXHJcbi8vIC8vICB9ICBcclxuLy8gLy8gIGVsc2UgXHJcbi8vIC8vICB7XHJcbi8vIC8vICAgICBhbGVydCgndW5rbm93bicpO1xyXG4vLyAvLyAgfVxyXG4vLyAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLyAgIFxyXG5cclxuXHJcblxyXG5cclxudmFyIHN3aXBlcldoeSA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJXaHlcIiwge1xyXG4gIGVmZmVjdDogXCJzbGlkZVwiLFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgLy8gY292ZXJmbG93RWZmZWN0OiB7XHJcbiAgLy8gICByb3RhdGU6IDUwLFxyXG4gIC8vICAgc3RyZXRjaDogMCxcclxuICAvLyAgIGRlcHRoOiAxMDAsXHJcbiAgLy8gICBtb2RpZmllcjogMSxcclxuICAvLyAgIHNsaWRlU2hhZG93czogdHJ1ZSxcclxuICAvLyB9LFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgZGVsYXk6IDUwMDAsXHJcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBzdW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAvLyBtb3VzZXdoZWVsOiB7XHJcbiAgLy8gICBzZW5zaXRpdml0eTogMSxcclxuICAvLyB9LFxyXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gIGxhenk6IHtcclxuICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXHJcbiAgICBsb2FkUHJldk5leHQ6IHRydWUsXHJcbiAgfSxcclxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcclxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdFwiKTtcclxuICAvLyBjb25zdCBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXhcIik7XHJcbiAgLy8gY29uc3QgYm91bmNlQmx1cjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1ibHVyLTFcIik7XHJcbiAgLy8gICBjb25zdCBib3VuY2VCbHVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWJsdXItMlwiKTtcclxuICAvLyAgIGNvbnN0IGJvdW5jZUJsdXIzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3VuY2UtYmx1ci0zXCIpO1xyXG4gIC8vICAgY29uc3QgYm91bmNlSW1nMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWltZy0xXCIpO1xyXG4gIC8vICAgY29uc3QgYm91bmNlSW1nMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWltZy0yXCIpO1xyXG4gIC8vICAgY29uc3QgYm91bmNlSW1nMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWltZy0zXCIpO1xyXG4gIC8vICAgY29uc3QgYm91bmNlSW1nNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWltZy00XCIpO1xyXG4gIC8vICAgY29uc3QgYm91bmNlSW1nNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm91bmNlLWltZy01XCIpO1xyXG5cclxuICAvLyBmaXJzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4R28pO1xyXG4gIC8vIGZ1bmN0aW9uIHBhcmFsbGF4R28oZSkge1xyXG4gIC8vICAgLy8gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvdW5jZVwiKS5mb3JFYWNoKGJvdW5jZSA9PiB7XHJcbiAgLy8gICAvLyAgIGNvbnN0IHNwZWVkID0gYm91bmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpO1xyXG4gIC8vICAgLy8gICBjb25zdCB4ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gZS5wYWdlWCpzcGVlZCkvMTAwO1xyXG4gIC8vICAgLy8gICBjb25zdCB5ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGUucGFnZVkqc3BlZWQpLzEwMDtcclxuICAvLyAgIC8vICAgYm91bmNlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYDtcclxuICAvLyAgIC8vICAgYm91bmNlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi40c1wiO1xyXG4gICAgICBcclxuICAvLyAgIC8vIH0pO1xyXG4gIC8vICAgY29uc3Qgc3BlZWQgPSBwYXJhbGxheC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKTtcclxuICAvLyAgIGNvbnN0IHggPSAod2luZG93LmlubmVyV2lkdGggLSBlLnBhZ2VYKnNwZWVkKS8xMDA7XHJcbiAgLy8gICBjb25zdCB5ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGUucGFnZVkqc3BlZWQpLzEwMDtcclxuICAvLyAgIHBhcmFsbGF4LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYDtcclxuICAvLyB9XHJcbiAgLy8gZmlyc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlc3RvcFwiLCBwYXJhbGxheFN0b3ApO1xyXG4gIC8vIGZ1bmN0aW9uIHBhcmFsbGF4U3RvcChlKSB7XHJcbiAgLy8gICAvLyB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm91bmNlXCIpLmZvckVhY2goYm91bmNlID0+IHtcclxuICAvLyAgIC8vICAgYm91bmNlLnN0eWxlLnRyYW5zaXRpb24gPSBcIi40c1wiO1xyXG4gICAgICBcclxuICAvLyAgIC8vIH0pO1xyXG4gIC8vIH1cclxuXHJcblxyXG4vLyAgIGNvbnN0IGJvdW5jZUltZzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1pbWctMVwiKTtcclxuLy8gICAgIGNvbnN0IGJvdW5jZUltZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1pbWctMlwiKTtcclxuLy8gICAgIGNvbnN0IGJvdW5jZUltZzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1pbWctM1wiKTtcclxuLy8gICAgIGNvbnN0IGJvdW5jZUltZzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1pbWctNFwiKTtcclxuLy8gICAgIGNvbnN0IGJvdW5jZUltZzUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdW5jZS1pbWctNVwiKTtcclxuLy8gICAgIGJvdW5jZUltZzEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZ2V0Qm91bmNlKGJvdW5jZUltZzEpKTtcclxuLy8gICAgIGJvdW5jZUltZzIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBnZXRCb3VuY2UoYm91bmNlSW1nMikpO1xyXG4vLyAgICAgYm91bmNlSW1nMy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBnZXRCb3VuY2UoYm91bmNlSW1nMykpO1xyXG4vLyAgICAgYm91bmNlSW1nNC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBnZXRCb3VuY2UoYm91bmNlSW1nNCkpO1xyXG4vLyAgICAgYm91bmNlSW1nNS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBnZXRCb3VuY2UoYm91bmNlSW1nNSkpO1xyXG4vLyAgICAgZnVuY3Rpb24gZ2V0Qm91bmNlKGJvdW5jZSkge1xyXG4vLyAgICAgICBib3VuY2Uuc3R5bGUgPSBcImJvdHRvbTogYCR7Z2V0UmFuZG9tSW50KDAsMTUwKX1gcHhcIjtcclxuLy8gICAgICAgY29uc29sZS5sb2coYm91bmNlKTtcclxuLy8gICAgICAgLy8gYm91bmNlLnN0eWxlID0gXCJib3R0b206IGdldFJhbmRvbUludCgkezAsMTUwfSlweFwiO1xyXG4vLyAgICAgICAvLyBib3VuY2UubGlzdFN0eWxlLmxlZnQgPSBgZ2V0UmFuZG9tSW50KCR7MCwxNTB9KXB4YDtcclxuLy8gICAgIH1cclxuLy8gLy8gICAkKHRoaXMpLmNzcyh7XHJcbi8vIC8vICAgICB0b3A6IGdldFJhbmRvbUludCgwLCAxNTApK1wicHhcIixcclxuLy8gLy8gICAgIGxlZnQ6IGdldFJhbmRvbUludCgwLCAxNTApK1wicHhcIlxyXG4vLyAvLyB9KTtcclxuXHJcbi8vIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4vLyAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4vLyAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4vLyB9XHJcbi8vICQoXCIuYm91bmNlLWltZy0xXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHsgXHJcbi8vICAgJCh0aGlzKS5jc3Moe1xyXG4vLyAgICAgICBsZWZ0OiA4OCArIGdldFJhbmRvbUludCgwLCA1KStcIiVcIixcclxuLy8gICAgICAgYm90dG9tOiA4ICsgZ2V0UmFuZG9tSW50KDAsIDUpK1wiJVwiXHJcbi8vICAgfSk7XHJcbi8vIH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcblxyXG5cclxuLy8gJChcIi5ib3VuY2UtaW1nLTJcIikuaG92ZXIoZnVuY3Rpb24gKCkgeyBcclxuLy8gICAkKHRoaXMpLmNzcyh7XHJcbi8vICAgICBsZWZ0OiA4OSArIGdldFJhbmRvbUludCgwLCAxMCkrXCIlXCIsXHJcbi8vICAgICBib3R0b206IDc5ICsgZ2V0UmFuZG9tSW50KDAsIDEwKStcIiVcIlxyXG4vLyAgIH0pO1xyXG4vLyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG5cclxuXHJcbi8vICQoXCIuYm91bmNlLWltZy0zXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHsgXHJcbi8vICAgJCh0aGlzKS5jc3Moe1xyXG4vLyAgICAgbGVmdDogNTYgKyBnZXRSYW5kb21JbnQoMCwgMzApK1wiJVwiLFxyXG4vLyAgICAgYm90dG9tOiAzNiArIGdldFJhbmRvbUludCgwLCAzMCkrXCIlXCJcclxuLy8gICB9KTtcclxuLy8gfSwgZnVuY3Rpb24gKCkgeyB9KTtcclxuXHJcblxyXG4vLyAkKFwiLmJvdW5jZS1pbWctNFwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7IFxyXG4vLyAgIGNvbnN0IGxlZnQgPSAkKFwiLmJvdW5jZS1pbWctNFwiKS5jc3MubGVmdDtcclxuLy8gICBjb25zdCBib3R0b20gPSAgJChcIi5ib3VuY2UtaW1nLTRcIikuY3NzLmJvdHRvbTtcclxuLy8gICAkKHRoaXMpLmNzcyh7XHJcbi8vICAgICBsZWZ0OiA1NiArIGdldFJhbmRvbUludCgwLCA0MCkrXCIlXCIsXHJcbi8vICAgICBib3R0b206IDM2ICsgZ2V0UmFuZG9tSW50KDAsIDQwKStcIiVcIlxyXG4vLyAgIH0pO1xyXG4vLyB9LCBmdW5jdGlvbiAoKSB7IH0pO1xyXG5cclxuXHJcbi8vICQoXCIuYm91bmNlLWltZy01XCIpLmhvdmVyKGZ1bmN0aW9uICgpIHsgXHJcbi8vICAgJCh0aGlzKS5jc3Moe1xyXG4vLyAgICAgbGVmdDogMzggKyBnZXRSYW5kb21JbnQoMCwgNTUpK1wiJSVcIixcclxuLy8gICAgIGJvdHRvbTogNzggKyBnZXRSYW5kb21JbnQoMCwgNTUpK1wiJVwiXHJcbi8vICAgfSk7XHJcbi8vIH0sIGZ1bmN0aW9uICgpIHsgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3Qgc2VydmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzXCIpO1xyXG4gIGNvbnN0IHBhcmFsbGF4U2VydmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmFsbGF4LXNlcnZpY2VzXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgYm91bmNlSW1nM1NlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3VuY2UtaW1nLTMtLXNlcnZpY2VzXCIpO1xyXG4gICAgY29uc3QgYm91bmNlSW1nNFNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3VuY2UtaW1nLTQtLXNlcnZpY2VzXCIpO1xyXG4gICAgY29uc3QgYm91bmNlSW1nNVNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3VuY2UtaW1nLTUtLXNlcnZpY2VzXCIpO1xyXG5cclxuICBzZXJ2aWNlcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4U2VydmljZXNHbyk7XHJcbiAgZnVuY3Rpb24gcGFyYWxsYXhTZXJ2aWNlc0dvKGUpIHtcclxuICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbChcIi5ib3VuY2UtLXNlcnZpY2VzXCIpLmZvckVhY2goYm91bmNlID0+IHtcclxuICAgICAgY29uc3Qgc3BlZWQgPSBib3VuY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJyk7XHJcbiAgICAgIC8vIGNvbnN0IGRhdGFYID0gYm91bmNlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XHJcbiAgICAgIGNvbnN0IHggPSAod2luZG93LmlubmVyV2lkdGggLSBlLnBhZ2VYKnNwZWVkKS8yMDA7XHJcbiAgICAgIGNvbnN0IHkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gZS5wYWdlWSpzcGVlZCkvMjAwO1xyXG4gICAgICBib3VuY2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt4fXB4KSB0cmFuc2xhdGVZKCR7eX1weClgO1xyXG4gICAgICBib3VuY2Uuc3R5bGUudHJhbnNpdGlvbiA9IFwiLjRzXCI7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBsZXQgcGxheWVyO1xyXG4gIGxldCBjdXJyZW50Vm9sdW1lID0gMTA7XHJcbiAgLy8gZnVuY3Rpb24gb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XHJcbiAgLy8gICBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCd5dC1wbGF5ZXInLCB7XHJcbiAgLy8gICAgIGhlaWdodDogJzM2MCcsXHJcbiAgLy8gICAgIHdpZGh0OiAnNjQwJyxcclxuICAvLyAgICAgLy8gcGxheWVyVmFyczoge1xyXG4gIC8vICAgICAvLyAgIC8vIGNvbnRyb2xzOiAwLFxyXG4gIC8vICAgICAvLyAgIGRpc2FibGVrYjogMCxcclxuICAvLyAgICAgLy8gICBzaG93aW5mbzogMCxcclxuICAvLyAgICAgLy8gICByZWw6IDAsXHJcbiAgLy8gICAgIC8vICAgYXV0b3BsYXk6IDAsXHJcbiAgLy8gICAgIC8vICAgbW9kZXN0cmFuZGluZzogMFxyXG4gIC8vICAgICAvLyB9LFxyXG4gIC8vICAgICB2aWRlb0lkOiAnNU04ZnQtM3ZEQzgnXHJcbiAgLy8gICAgIC8vIGV2ZW50czoge1xyXG4gIC8vICAgICAvLyAgICdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeSxcclxuICAvLyAgICAgLy8gICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VcclxuICAvLyAgICAgLy8gfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vIGZ1bmN0aW9uIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gIC8vICAgcGxheWVyID0gbmV3IFlULlBsYXllcihcInBsYXllclwiLCB7XHJcbiAgLy8gICAgIGhlaWdodDogJzM2MCcsXHJcbiAgLy8gICAgIHdpZHRoOiAnNjQwJyxcclxuICAvLyAgICAgdmlkZW9JZDogJzVNOGZ0LTN2REM4JyxcclxuICAvLyAgICAgLy8gZXZlbnRzOiB7XHJcbiAgLy8gICAgIC8vICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxyXG4gIC8vICAgICAvLyAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxyXG4gIC8vICAgICAvLyB9XHJcbiAgLy8gICAgIHBsYXllclZhcnM6IHtcclxuICAvLyAgICAgICAvLyAgIC8vIGNvbnRyb2xzOiAwLFxyXG4gIC8vICAgICAgIC8vICAgZGlzYWJsZWtiOiAwLFxyXG4gIC8vICAgICAgICAgc2hvd2luZm86IDAsXHJcbiAgLy8gICAgICAgICByZWw6IDAsXHJcbiAgLy8gICAgICAgICBhdXRvcGxheTogMCxcclxuICAvLyAgICAgICAgIG1vZGVzdHJhbmRpbmc6IDBcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9Il0sImZpbGUiOiJtYWluLmpzIn0=
