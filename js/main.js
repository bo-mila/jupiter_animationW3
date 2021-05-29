// const bounce = document.querySelector(".bounce-img-3");
// // const bounces = document.querySelector(".bounces");
// bounce.addEventListener("mousemove", (e) => {
//   bounce.left = "50px";
//   // bounce.animation = "1s bounceBlur1 100s";
// });


const firstSliderButPrev = document.querySelector(".slider-first__button--prev");
const firstSliderButNext = document.querySelector(".slider-first__button--next");
let fDisp = document.getElementsByClassName("fdisp");

var slideIndex = 1;
showDivs(slideIndex);



firstSliderButPrev.addEventListener("click", () => {
  plusDivs(-1);
});
firstSliderButNext.addEventListener("click", () => {
  plusDivs(+1);
});




function plusDivs(n) {
  showDivs(slideIndex += n);
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






function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slider-first__item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    fDisp[i].classList.remove("display__item--active");
    x[i].style.display = "none";
    
    
  }
  console.log(n, x[n-1]);
 fDisp[n-1].classList.add("display__item--active");
  x[n-1].style.display = "flex";
}



