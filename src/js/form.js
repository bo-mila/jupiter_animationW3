



const formaTitle = document.querySelector(".forma__title");
const forma = document.querySelector(".forma");

formaTitle.addEventListener("click", function() {
  console.log("нажали на тайтл");
  if (forma.classList.contains("_active")) {
    forma.classList.remove("_active");
    return;
  }
  forma.classList.add("_active");

})










// document.querySelectorAll('textarea').forEach(el => {
//   el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
//   el.classList.add('auto');
//   el.addEventListener('input', e => {
//     el.style.height = 'auto';
//     el.style.height = (el.scrollHeight) + 'px';
//   });
// });



