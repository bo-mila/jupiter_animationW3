



// const formaTitle = document.querySelector(".forma__title");
// const forma = document.querySelector(".forma");

// formaTitle.addEventListener("click", function() {
//   console.log("нажали на тайтл");
//   if (forma.classList.contains("_active")) {
//     forma.classList.remove("_active");
//     return;
//   }
//   forma.classList.add("_active");

// })










document.querySelectorAll('textarea').forEach(el => {
  el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight  + 'px');
  el.classList.add('auto');
  el.addEventListener('input', e => {
  
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight) + 'px';
  });
});




// particlesJS.load('particles-planets', 'assets/particles-planets.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// Configure particles-js
particlesJS('particles-planets-forma',
  {
    "particles": {
      "number": {
        "value": 1,
        "density": {
          "enable": false,
          "value_area": 100
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type":  "image",
        "type2":  ["image2", "image3", "image4", "image5" ],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "assets/image1.png"
          // "width": 250,
          // "height": 250
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 600,  
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0,
        "direction": "none",
        "random": false,
        "straight": true,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 10,
          "rotateY": 10
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 225.94405594405595,
          "duration": 0.5
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
