

const hamburgerMenuInput = document.querySelector(".hamburger-menu__input");
const hamburger = document.querySelector(".hamburger");
const maincontent = document.querySelector(".maincontent");




const menuLinks = document.querySelectorAll("[data-scrollId");
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", clickOnLink);
  });
  function clickOnLink(e) {
    // window.removeEventListener('scroll', noScroll);
    // hamburger.classList.remove("hamburger--visible");
    hamburgerMenuInput.click();
    const menuLink = e.target;
    
    if (menuLink.dataset.scrollid && document.querySelector(menuLink.dataset.scrollid)) {
      const scrollToSection = document.querySelector(menuLink.dataset.scrollid);
      const scrollToSectionValue = scrollToSection.getBoundingClientRect().top + pageYOffset;
      window.scrollTo({
        top: scrollToSectionValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}


const headerHamb = document.querySelector(".header");



hamburgerMenuInput.addEventListener("click", function(e) {
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

