

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
    // hamburgerMenuInput.click();
    let scrollToSection;
    if (i == 0) {
      window.location.href = './index.html';
  
    } else if (i == 1) {
      window.location.href = './forma.html#sectionPortfolio';

    } else if (i == 2) {
      window.location.href = './forma.html#sectionWhy';

    } else if (i == 3) {
      window.location.href = './forma.html#sectionReviews';

    } else if (i == 4) {
      window.location.href = './forma.html#sectionServices';

    } 
    else {
      window.location.href = './forma.html';
    }
    // scrollToSection.scrollIntoView({
    //   block: "center",
    //   inline: "nearest",
    //   behavior: "smooth"
    // });
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

