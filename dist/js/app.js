// particlesJS.load('particles-planets', 'assets/particles-planets.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// Configure particles-js
particlesJS('particles-planets-2',
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


// particlesJS('particles-planets-1',
//   {
//     "particles": {
//       "number": {
//         "value": 1,
//         "density": {
//           "enable": true,
//           "value_area": 100
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type":  "grad",        // ["grad", "grad2", "grad3", "grad4", "grad5" ],
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 4
//         },
//         "image": {
//           "src": "assets/image1.png"
//           // "width": 250,
//           // "height": 250
//         }
//       },
//       "opacity": {
//         "value": 1,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 600,  
//         "random": false,
//         "anim": {
//           "enable": true,
//           "speed": 10,
//           "size_min": 40,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": false,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 8,
//         "direction": "none",
//         "random": true,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 10,
//           "rotateY": 10
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "repulse"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 250,
//           "size": 0,
//           "duration": 2,
//           "opacity": 0,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 150.94405594405595,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   }
// );

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLXBsYW5ldHMnLCAnYXNzZXRzL3BhcnRpY2xlcy1wbGFuZXRzLmpzb24nLCBmdW5jdGlvbigpIHtcclxuLy8gICBjb25zb2xlLmxvZygnY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZCcpO1xyXG4vLyB9KTtcclxuXHJcbi8vIENvbmZpZ3VyZSBwYXJ0aWNsZXMtanNcclxucGFydGljbGVzSlMoJ3BhcnRpY2xlcy1wbGFuZXRzLTInLFxyXG4gIHtcclxuICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgXCJudW1iZXJcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMSxcclxuICAgICAgICBcImRlbnNpdHlcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInZhbHVlX2FyZWFcIjogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwic2hhcGVcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFwidHlwZTJcIjogIFtcImltYWdlMlwiLCBcImltYWdlM1wiLCBcImltYWdlNFwiLCBcImltYWdlNVwiIF0sXHJcbiAgICAgICAgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAgXCJ3aWR0aFwiOiAwLFxyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICAgIFwibmJfc2lkZXNcIjogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgICBcInNyY1wiOiBcImFzc2V0cy9pbWFnZTEucG5nXCJcclxuICAgICAgICAgIC8vIFwid2lkdGhcIjogMjUwLFxyXG4gICAgICAgICAgLy8gXCJoZWlnaHRcIjogMjUwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgIFwidmFsdWVcIjogMSxcclxuICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAsXHJcbiAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgXCJ2YWx1ZVwiOiA2MDAsICBcclxuICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDEwLFxyXG4gICAgICAgICAgXCJzaXplX21pblwiOiA0MCxcclxuICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICB9LFxyXG4gICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgXCJzcGVlZFwiOiAwLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxyXG4gICAgICAgIFwic3RyYWlnaHRcIjogdHJ1ZSxcclxuICAgICAgICBcIm91dF9tb2RlXCI6IFwiYm91bmNlXCIsXHJcbiAgICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJyb3RhdGVYXCI6IDEwLFxyXG4gICAgICAgICAgXCJyb3RhdGVZXCI6IDEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcclxuICAgICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgIFwib25ob3ZlclwiOiB7XHJcbiAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDI1MCxcclxuICAgICAgICAgIFwic2l6ZVwiOiAwLFxyXG4gICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4gICAgICAgICAgXCJvcGFjaXR5XCI6IDAsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDIyNS45NDQwNTU5NDQwNTU5NSxcclxuICAgICAgICAgIFwiZHVyYXRpb25cIjogMC41XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbi8vIHBhcnRpY2xlc0pTKCdwYXJ0aWNsZXMtcGxhbmV0cy0xJyxcclxuLy8gICB7XHJcbi8vICAgICBcInBhcnRpY2xlc1wiOiB7XHJcbi8vICAgICAgIFwibnVtYmVyXCI6IHtcclxuLy8gICAgICAgICBcInZhbHVlXCI6IDEsXHJcbi8vICAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuLy8gICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbi8vICAgICAgICAgICBcInZhbHVlX2FyZWFcIjogMTAwXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBcImNvbG9yXCI6IHtcclxuLy8gICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIFwic2hhcGVcIjoge1xyXG4vLyAgICAgICAgIFwidHlwZVwiOiAgXCJncmFkXCIsICAgICAgICAvLyBbXCJncmFkXCIsIFwiZ3JhZDJcIiwgXCJncmFkM1wiLCBcImdyYWQ0XCIsIFwiZ3JhZDVcIiBdLFxyXG4vLyAgICAgICAgIFwic3Ryb2tlXCI6IHtcclxuLy8gICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuLy8gICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwicG9seWdvblwiOiB7XHJcbi8vICAgICAgICAgICBcIm5iX3NpZGVzXCI6IDRcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwiaW1hZ2VcIjoge1xyXG4vLyAgICAgICAgICAgXCJzcmNcIjogXCJhc3NldHMvaW1hZ2UxLnBuZ1wiXHJcbi8vICAgICAgICAgICAvLyBcIndpZHRoXCI6IDI1MCxcclxuLy8gICAgICAgICAgIC8vIFwiaGVpZ2h0XCI6IDI1MFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgXCJvcGFjaXR5XCI6IHtcclxuLy8gICAgICAgICBcInZhbHVlXCI6IDEsXHJcbi8vICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbi8vICAgICAgICAgXCJhbmltXCI6IHtcclxuLy8gICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4vLyAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxyXG4vLyAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBcInNpemVcIjoge1xyXG4vLyAgICAgICAgIFwidmFsdWVcIjogNjAwLCAgXHJcbi8vICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbi8vICAgICAgICAgXCJhbmltXCI6IHtcclxuLy8gICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbi8vICAgICAgICAgICBcInNwZWVkXCI6IDEwLFxyXG4vLyAgICAgICAgICAgXCJzaXplX21pblwiOiA0MCxcclxuLy8gICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbi8vICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbi8vICAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAsXHJcbi8vICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcclxuLy8gICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4vLyAgICAgICAgIFwid2lkdGhcIjogMVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBcIm1vdmVcIjoge1xyXG4vLyAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbi8vICAgICAgICAgXCJzcGVlZFwiOiA4LFxyXG4vLyAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwibm9uZVwiLFxyXG4vLyAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbi8vICAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuLy8gICAgICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsXHJcbi8vICAgICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbi8vICAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuLy8gICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgXCJyb3RhdGVYXCI6IDEwLFxyXG4vLyAgICAgICAgICAgXCJyb3RhdGVZXCI6IDEwXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcclxuLy8gICAgICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuLy8gICAgICAgXCJldmVudHNcIjoge1xyXG4vLyAgICAgICAgIFwib25ob3ZlclwiOiB7XHJcbi8vICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4vLyAgICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4vLyAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbi8vICAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwicmVzaXplXCI6IHRydWVcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgXCJtb2Rlc1wiOiB7XHJcbi8vICAgICAgICAgXCJncmFiXCI6IHtcclxuLy8gICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4vLyAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbi8vICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBcImJ1YmJsZVwiOiB7XHJcbi8vICAgICAgICAgICBcImRpc3RhbmNlXCI6IDI1MCxcclxuLy8gICAgICAgICAgIFwic2l6ZVwiOiAwLFxyXG4vLyAgICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4vLyAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAsXHJcbi8vICAgICAgICAgICBcInNwZWVkXCI6IDNcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbi8vICAgICAgICAgICBcImRpc3RhbmNlXCI6IDE1MC45NDQwNTU5NDQwNTU5NSxcclxuLy8gICAgICAgICAgIFwiZHVyYXRpb25cIjogMC40XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBcInB1c2hcIjoge1xyXG4vLyAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4vLyAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbi8vICAgfVxyXG4vLyApO1xyXG4iXSwiZmlsZSI6ImFwcC5qcyJ9
