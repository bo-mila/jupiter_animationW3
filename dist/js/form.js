



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
        "value": 5,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type":  ["image", "image2-forma", "image3-forma", "image4-forma", "image5-forma" ],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "assets/image2.png"
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
        "speed": 8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
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
          "distance": 150.94405594405595,
          "duration": 0.4
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBmb3JtYVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtYV9fdGl0bGVcIik7XHJcbi8vIGNvbnN0IGZvcm1hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtYVwiKTtcclxuXHJcbi8vIGZvcm1hVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwi0L3QsNC20LDQu9C4INC90LAg0YLQsNC50YLQu1wiKTtcclxuLy8gICBpZiAoZm9ybWEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2FjdGl2ZVwiKSkge1xyXG4vLyAgICAgZm9ybWEuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIik7XHJcbi8vICAgICByZXR1cm47XHJcbi8vICAgfVxyXG4vLyAgIGZvcm1hLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpO1xyXG5cclxuLy8gfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6ICcgKyBlbC5zY3JvbGxIZWlnaHQgICsgJ3B4Jyk7XHJcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYXV0bycpO1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XHJcbiAgXHJcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSAoZWwuc2Nyb2xsSGVpZ2h0KSArICdweCc7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8gcGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLXBsYW5ldHMnLCAnYXNzZXRzL3BhcnRpY2xlcy1wbGFuZXRzLmpzb24nLCBmdW5jdGlvbigpIHtcclxuLy8gICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xyXG4vLyB9KTtcclxuXHJcbi8vIENvbmZpZ3VyZSBwYXJ0aWNsZXMtanNcclxucGFydGljbGVzSlMoJ3BhcnRpY2xlcy1wbGFuZXRzLWZvcm1hJyxcclxuICB7XHJcbiAgICBcInBhcnRpY2xlc1wiOiB7XHJcbiAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IDUsXHJcbiAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcInZhbHVlX2FyZWFcIjogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwic2hhcGVcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiAgW1wiaW1hZ2VcIiwgXCJpbWFnZTItZm9ybWFcIiwgXCJpbWFnZTMtZm9ybWFcIiwgXCJpbWFnZTQtZm9ybWFcIiwgXCJpbWFnZTUtZm9ybWFcIiBdLFxyXG4gICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICBcIm5iX3NpZGVzXCI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW1hZ2VcIjoge1xyXG4gICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaW1hZ2UyLnBuZ1wiXHJcbiAgICAgICAgICAvLyBcIndpZHRoXCI6IDI1MCxcclxuICAgICAgICAgIC8vIFwiaGVpZ2h0XCI6IDI1MFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJvcGFjaXR5XCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IDEsXHJcbiAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxyXG4gICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcInNpemVcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogNjAwLCAgXHJcbiAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAxMCxcclxuICAgICAgICAgIFwic2l6ZV9taW5cIjogNDAsXHJcbiAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgICBcIndpZHRoXCI6IDFcclxuICAgICAgfSxcclxuICAgICAgXCJtb3ZlXCI6IHtcclxuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgIFwic3BlZWRcIjogOCxcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICAgIFwiYm91bmNlXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiYXR0cmFjdFwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwicm90YXRlWFwiOiAxMCxcclxuICAgICAgICAgIFwicm90YXRlWVwiOiAxMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiaW50ZXJhY3Rpdml0eVwiOiB7XHJcbiAgICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXHJcbiAgICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIFwibW9kZXNcIjoge1xyXG4gICAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiAyNTAsXHJcbiAgICAgICAgICBcInNpemVcIjogMCxcclxuICAgICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICAgIFwib3BhY2l0eVwiOiAwLFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcHVsc2VcIjoge1xyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAuOTQ0MDU1OTQ0MDU1OTUsXHJcbiAgICAgICAgICBcImR1cmF0aW9uXCI6IDAuNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcclxuICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZVxyXG4gIH1cclxuKTtcclxuXHJcblxyXG4iXSwiZmlsZSI6ImZvcm0uanMifQ==
