
particlesJS.load('particles-js', 'assets/particles-zydex-index.json', function() {
  console.log('callback - particles.js config loaded');
});


const hamburgerMenuInput = document.querySelector(".hamburger-menu__input");
const hamburger = document.querySelector(".hamburger");
const maincontent = document.querySelector(".maincontent");




const menuLinks = document.querySelectorAll(".nav__ref");
for(let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function(e) {
    e.preventDefault();
    
    clickOnLink(i)
  });
  function clickOnLink(i) {
    console.log(i);
    // hamburgerMenuInput.click();
    let scrollToSection;
    if (i == 0) {
      scrollToSection = document.querySelector(".first");
      
  
    } else if (i == 1) {
      scrollToSection = document.querySelector(".portfolio");
    } else if (i == 2) {
      scrollToSection = document.querySelector(".why");
    } else if (i == 3) {
      scrollToSection = document.querySelector(".reviews");
    } else if (i == 4) {
      scrollToSection = document.querySelector(".services");
    } 
    else {
      window.location.href = './forma.html';
    }
    scrollToSection.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth"
    });
  }
  
}
const menuHambLinks = document.querySelectorAll(".nav-hamb__ref");
for(let i = 0; i < menuHambLinks.length; i++) {
  menuHambLinks[i].addEventListener("click", function(e) {
    e.preventDefault();
    clickOnLink(i)
  });
  function clickOnLink(i) {
    console.log(i);
    hamburgerMenuInput.click();
    let scrollToSection;
    if (i == 0) {
      scrollToSection = document.querySelector(".first");
      
  
    } else if (i == 1) {
      scrollToSection = document.querySelector(".portfolio");
    } else if (i == 2) {
      scrollToSection = document.querySelector(".services");
    } else if (i == 3) {
      scrollToSection = document.querySelector(".contacts");
    }  else {
      scrollToSection = document.querySelector(".first");
    }
    scrollToSection.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth"
    });
  }
  
}

// const menuLinks = document.querySelectorAll("[data-scrollId");
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", clickOnLink);
//   });
//   function clickOnLink(e) {
//     // window.removeEventListener('scroll', noScroll);
//     // hamburger.classList.remove("hamburger--visible");
//     hamburgerMenuInput.click();
//     const menuLink = e.target;
    
//     if (menuLink.dataset.scrollid && document.querySelector(menuLink.dataset.scrollid)) {
//       const scrollToSection = document.querySelector(menuLink.dataset.scrollid);
//       const scrollToSectionValue = scrollToSection.getBoundingClientRect().top + pageYOffset;
//       window.scrollTo({
//         top: scrollToSectionValue,
//         behavior: "smooth"
//       });
//       e.preventDefault();
//     }
//   }
// }


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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxucGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJ2Fzc2V0cy9wYXJ0aWNsZXMtenlkZXgtaW5kZXguanNvbicsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGhhbWJ1cmdlck1lbnVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVfX2lucHV0XCIpO1xyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5jb250ZW50XCIpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX3JlZlwiKTtcclxuZm9yKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gIG1lbnVMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjbGlja09uTGluayhpKVxyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGNsaWNrT25MaW5rKGkpIHtcclxuICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgLy8gaGFtYnVyZ2VyTWVudUlucHV0LmNsaWNrKCk7XHJcbiAgICBsZXQgc2Nyb2xsVG9TZWN0aW9uO1xyXG4gICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICBzY3JvbGxUb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0XCIpO1xyXG4gICAgICBcclxuICBcclxuICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgIHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09IDIpIHtcclxuICAgICAgc2Nyb2xsVG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aHlcIik7XHJcbiAgICB9IGVsc2UgaWYgKGkgPT0gMykge1xyXG4gICAgICBzY3JvbGxUb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldmlld3NcIik7XHJcbiAgICB9IGVsc2UgaWYgKGkgPT0gNCkge1xyXG4gICAgICBzY3JvbGxUb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzXCIpO1xyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2Zvcm1hLmh0bWwnO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICAgIGlubGluZTogXCJuZWFyZXN0XCIsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn1cclxuY29uc3QgbWVudUhhbWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWhhbWJfX3JlZlwiKTtcclxuZm9yKGxldCBpID0gMDsgaSA8IG1lbnVIYW1iTGlua3MubGVuZ3RoOyBpKyspIHtcclxuICBtZW51SGFtYkxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbGlja09uTGluayhpKVxyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGNsaWNrT25MaW5rKGkpIHtcclxuICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgaGFtYnVyZ2VyTWVudUlucHV0LmNsaWNrKCk7XHJcbiAgICBsZXQgc2Nyb2xsVG9TZWN0aW9uO1xyXG4gICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICBzY3JvbGxUb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0XCIpO1xyXG4gICAgICBcclxuICBcclxuICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgIHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09IDIpIHtcclxuICAgICAgc2Nyb2xsVG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlc1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PSAzKSB7XHJcbiAgICAgIHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdHNcIik7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAgc2Nyb2xsVG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdFwiKTtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICBpbmxpbmU6IFwibmVhcmVzdFwiLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4vLyBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2Nyb2xsSWRcIik7XHJcbi8vIGlmIChtZW51TGlua3MubGVuZ3RoID4gMCkge1xyXG4vLyAgIG1lbnVMaW5rcy5mb3JFYWNoKG1lbnVMaW5rID0+IHtcclxuLy8gICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja09uTGluayk7XHJcbi8vICAgfSk7XHJcbi8vICAgZnVuY3Rpb24gY2xpY2tPbkxpbmsoZSkge1xyXG4vLyAgICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTtcclxuLy8gICAgIC8vIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFtYnVyZ2VyLS12aXNpYmxlXCIpO1xyXG4vLyAgICAgaGFtYnVyZ2VyTWVudUlucHV0LmNsaWNrKCk7XHJcbi8vICAgICBjb25zdCBtZW51TGluayA9IGUudGFyZ2V0O1xyXG4gICAgXHJcbi8vICAgICBpZiAobWVudUxpbmsuZGF0YXNldC5zY3JvbGxpZCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVMaW5rLmRhdGFzZXQuc2Nyb2xsaWQpKSB7XHJcbi8vICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUxpbmsuZGF0YXNldC5zY3JvbGxpZCk7XHJcbi8vICAgICAgIGNvbnN0IHNjcm9sbFRvU2VjdGlvblZhbHVlID0gc2Nyb2xsVG9TZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHBhZ2VZT2Zmc2V0O1xyXG4vLyAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4vLyAgICAgICAgIHRvcDogc2Nyb2xsVG9TZWN0aW9uVmFsdWUsXHJcbi8vICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBoZWFkZXJIYW1iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcblxyXG5cclxuXHJcbmhhbWJ1cmdlck1lbnVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGNvbnNvbGUubG9nKFwiZWhmXCIpO1xyXG4gIGlmIChoYW1idXJnZXJNZW51SW5wdXQuY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlci0tdmlzaWJsZVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGhlYWRlckhhbWIuc3R5bGUpO1xyXG4gICAgaGVhZGVySGFtYi5jbGFzc0xpc3QuYWRkKFwiX2ZpeGVkXCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTsgXHJcbiAgfSBlbHNlIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFtYnVyZ2VyLS12aXNpYmxlXCIpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKTtcclxuICAgIGhlYWRlckhhbWIuY2xhc3NMaXN0LnJlbW92ZShcIl9maXhlZFwiKTtcclxuXHJcblxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gbm9TY3JvbGwoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
