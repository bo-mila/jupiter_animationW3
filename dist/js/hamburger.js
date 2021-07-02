

const hamburgerMenuInput = document.querySelector(".hamburger-menu__input");
const hamburger = document.querySelector(".hamburger");
const maincontent = document.querySelector(".maincontent");




// const menuLinks = document.querySelectorAll(".nav__ref");
// for(let i = 0; i < menuLinks.length; i++) {
//   menuLinks[i].addEventListener("click", function(e) {
//     e.preventDefault();
    
//     clickOnLink(i)
//   });
//   function clickOnLink(i) {
//     // hamburgerMenuInput.click();
//     let scrollToSection;
//     if (i == 0) {
//       window.location.href = './index.html';
  
//     } else if (i == 1) {
//       window.location.href = './forma.html#sectionPortfolio';

//     } else if (i == 2) {
//       window.location.href = './forma.html#sectionWhy';

//     } else if (i == 3) {
//       window.location.href = './forma.html#sectionReviews';

//     } else if (i == 4) {
//       window.location.href = './forma.html#sectionServices';

//     } 
//     else {
//       window.location.href = './forma.html';
//     }
//     // scrollToSection.scrollIntoView({
//     //   block: "center",
//     //   inline: "nearest",
//     //   behavior: "smooth"
//     // });
//   }
  
// }
// const menuHambLinks = document.querySelectorAll(".nav-hamb__ref");
// for(let i = 0; i < menuHambLinks.length; i++) {
//   menuHambLinks[i].addEventListener("click", function(e) {
//     e.preventDefault();
//     clickOnLink(i)
//   });
//   function clickOnLink(i) {
//     console.log(i);
//     hamburgerMenuInput.click();
//     let scrollToSection;
//     if (i == 0) {
//       scrollToSection = document.querySelector(".first");
      
  
//     } else if (i == 1) {
//       scrollToSection = document.querySelector(".portfolio");
//     } else if (i == 2) {
//       scrollToSection = document.querySelector(".services");
//     } else if (i == 3) {
//       scrollToSection = document.querySelector(".contacts");
//     }  else {
//       scrollToSection = document.querySelector(".first");
//     }
//     scrollToSection.scrollIntoView({
//       block: "center",
//       inline: "nearest",
//       behavior: "smooth"
//     });
//   }
  
// }

// // const menuLinks = document.querySelectorAll("[data-scrollId");
// // if (menuLinks.length > 0) {
// //   menuLinks.forEach(menuLink => {
// //     menuLink.addEventListener("click", clickOnLink);
// //   });
// //   function clickOnLink(e) {
// //     // window.removeEventListener('scroll', noScroll);
// //     // hamburger.classList.remove("hamburger--visible");
// //     hamburgerMenuInput.click();
// //     const menuLink = e.target;
    
// //     if (menuLink.dataset.scrollid && document.querySelector(menuLink.dataset.scrollid)) {
// //       const scrollToSection = document.querySelector(menuLink.dataset.scrollid);
// //       const scrollToSectionValue = scrollToSection.getBoundingClientRect().top + pageYOffset;
// //       window.scrollTo({
// //         top: scrollToSectionValue,
// //         behavior: "smooth"
// //       });
// //       e.preventDefault();
// //     }
// //   }
// // }


const headerHamb = document.querySelector(".header");



hamburgerMenuInput.addEventListener("click", function(e) {
  console.log("ehf");
  if (hamburgerMenuInput.checked == true) {
    hamburger.classList.add("hamburger--visible");
    // console.log(headerHamb.style);
    headerHamb.classList.add("_fixed");
    window.addEventListener('scroll', noScroll); 
  } else {
    hamburger.classList.remove("hamburger--visible");
    window.removeEventListener('scroll', noScroll);
    headerHamb.classList.remove("_fixed");


  }
});


function noScroll() {
    window.scrollTo(0, 0);
  }


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoYW1idXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBoYW1idXJnZXJNZW51SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51X19pbnB1dFwiKTtcclxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XHJcbmNvbnN0IG1haW5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluY29udGVudFwiKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19yZWZcIik7XHJcbi8vIGZvcihsZXQgaSA9IDA7IGkgPCBtZW51TGlua3MubGVuZ3RoOyBpKyspIHtcclxuLy8gICBtZW51TGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4vLyAgICAgY2xpY2tPbkxpbmsoaSlcclxuLy8gICB9KTtcclxuLy8gICBmdW5jdGlvbiBjbGlja09uTGluayhpKSB7XHJcbi8vICAgICAvLyBoYW1idXJnZXJNZW51SW5wdXQuY2xpY2soKTtcclxuLy8gICAgIGxldCBzY3JvbGxUb1NlY3Rpb247XHJcbi8vICAgICBpZiAoaSA9PSAwKSB7XHJcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vaW5kZXguaHRtbCc7XHJcbiAgXHJcbi8vICAgICB9IGVsc2UgaWYgKGkgPT0gMSkge1xyXG4vLyAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2Zvcm1hLmh0bWwjc2VjdGlvblBvcnRmb2xpbyc7XHJcblxyXG4vLyAgICAgfSBlbHNlIGlmIChpID09IDIpIHtcclxuLy8gICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9mb3JtYS5odG1sI3NlY3Rpb25XaHknO1xyXG5cclxuLy8gICAgIH0gZWxzZSBpZiAoaSA9PSAzKSB7XHJcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vZm9ybWEuaHRtbCNzZWN0aW9uUmV2aWV3cyc7XHJcblxyXG4vLyAgICAgfSBlbHNlIGlmIChpID09IDQpIHtcclxuLy8gICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9mb3JtYS5odG1sI3NlY3Rpb25TZXJ2aWNlcyc7XHJcblxyXG4vLyAgICAgfSBcclxuLy8gICAgIGVsc2Uge1xyXG4vLyAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2Zvcm1hLmh0bWwnO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLy8gc2Nyb2xsVG9TZWN0aW9uLnNjcm9sbEludG9WaWV3KHtcclxuLy8gICAgIC8vICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbi8vICAgICAvLyAgIGlubGluZTogXCJuZWFyZXN0XCIsXHJcbi8vICAgICAvLyAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbi8vICAgICAvLyB9KTtcclxuLy8gICB9XHJcbiAgXHJcbi8vIH1cclxuLy8gY29uc3QgbWVudUhhbWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWhhbWJfX3JlZlwiKTtcclxuLy8gZm9yKGxldCBpID0gMDsgaSA8IG1lbnVIYW1iTGlua3MubGVuZ3RoOyBpKyspIHtcclxuLy8gICBtZW51SGFtYkxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBjbGlja09uTGluayhpKVxyXG4vLyAgIH0pO1xyXG4vLyAgIGZ1bmN0aW9uIGNsaWNrT25MaW5rKGkpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGkpO1xyXG4vLyAgICAgaGFtYnVyZ2VyTWVudUlucHV0LmNsaWNrKCk7XHJcbi8vICAgICBsZXQgc2Nyb2xsVG9TZWN0aW9uO1xyXG4vLyAgICAgaWYgKGkgPT0gMCkge1xyXG4vLyAgICAgICBzY3JvbGxUb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0XCIpO1xyXG4gICAgICBcclxuICBcclxuLy8gICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XHJcbi8vICAgICAgIHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvXCIpO1xyXG4vLyAgICAgfSBlbHNlIGlmIChpID09IDIpIHtcclxuLy8gICAgICAgc2Nyb2xsVG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlc1wiKTtcclxuLy8gICAgIH0gZWxzZSBpZiAoaSA9PSAzKSB7XHJcbi8vICAgICAgIHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdHNcIik7XHJcbi8vICAgICB9ICBlbHNlIHtcclxuLy8gICAgICAgc2Nyb2xsVG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdFwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHNjcm9sbFRvU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7XHJcbi8vICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4vLyAgICAgICBpbmxpbmU6IFwibmVhcmVzdFwiLFxyXG4vLyAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyB9XHJcblxyXG4vLyAvLyBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2Nyb2xsSWRcIik7XHJcbi8vIC8vIGlmIChtZW51TGlua3MubGVuZ3RoID4gMCkge1xyXG4vLyAvLyAgIG1lbnVMaW5rcy5mb3JFYWNoKG1lbnVMaW5rID0+IHtcclxuLy8gLy8gICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja09uTGluayk7XHJcbi8vIC8vICAgfSk7XHJcbi8vIC8vICAgZnVuY3Rpb24gY2xpY2tPbkxpbmsoZSkge1xyXG4vLyAvLyAgICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTtcclxuLy8gLy8gICAgIC8vIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFtYnVyZ2VyLS12aXNpYmxlXCIpO1xyXG4vLyAvLyAgICAgaGFtYnVyZ2VyTWVudUlucHV0LmNsaWNrKCk7XHJcbi8vIC8vICAgICBjb25zdCBtZW51TGluayA9IGUudGFyZ2V0O1xyXG4gICAgXHJcbi8vIC8vICAgICBpZiAobWVudUxpbmsuZGF0YXNldC5zY3JvbGxpZCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVMaW5rLmRhdGFzZXQuc2Nyb2xsaWQpKSB7XHJcbi8vIC8vICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUxpbmsuZGF0YXNldC5zY3JvbGxpZCk7XHJcbi8vIC8vICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvblZhbHVlID0gc2Nyb2xsVG9TZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHBhZ2VZT2Zmc2V0O1xyXG4vLyAvLyAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4vLyAvLyAgICAgICAgIHRvcDogc2Nyb2xsVG9TZWN0aW9uVmFsdWUsXHJcbi8vIC8vICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuLy8gLy8gICAgICAgfSk7XHJcbi8vIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gICB9XHJcbi8vIC8vIH1cclxuXHJcblxyXG5jb25zdCBoZWFkZXJIYW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcblxyXG5cclxuXHJcbmhhbWJ1cmdlck1lbnVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGNvbnNvbGUubG9nKFwiZWhmXCIpO1xyXG4gIGlmIChoYW1idXJnZXJNZW51SW5wdXQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlci0tdmlzaWJsZVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGhlYWRlckhhbWIuc3R5bGUpO1xyXG4gICAgaGVhZGVySGFtYi5jbGFzc0xpc3QuYWRkKFwiX2ZpeGVkXCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTsgXHJcbiAgfSBlbHNlIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFtYnVyZ2VyLS12aXNpYmxlXCIpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTtcclxuICAgIGhlYWRlckhhbWIuY2xhc3NMaXN0LnJlbW92ZShcIl9maXhlZFwiKTtcclxuXHJcblxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gbm9TY3JvbGwoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuIl0sImZpbGUiOiJoYW1idXJnZXIuanMifQ==
