let player = document.getElementById('sushi2-video');
  const playerSplash = document.querySelector(".sushi-style__play-wrapper");
  player.volume = "0.005";
  playerSplash.addEventListener("click", function() {
    playerSplash.style.display = "none";
    player.style.opacity = "1";
    player.play();
  });
  player.addEventListener("ended", function() {
    playerSplash.style.display = "block";
    player.style.opacity = "0";

  });

  let playerMain = document.getElementById('sushi-video');

  window.onload = function() {
    playerMain.play();
  // // const playerSplash = document.querySelector(".sushi-style__play-wrapper");
  // // player.volume = "0.005";
  // playerSplash.addEventListener("click", function() {
  //   playerSplash.style.display = "none";
  //   player.style.opacity = "1";
  //   player.play();
  // });
  // player.addEventListener("ended", function() {
  //   playerSplash.style.display = "block";
  //   player.style.opacity = "0";

  // });
 };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdXNoaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1c2hpMi12aWRlbycpO1xyXG4gIGNvbnN0IHBsYXllclNwbGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VzaGktc3R5bGVfX3BsYXktd3JhcHBlclwiKTtcclxuICBwbGF5ZXIudm9sdW1lID0gXCIwLjAwNVwiO1xyXG4gIHBsYXllclNwbGFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBwbGF5ZXJTcGxhc2guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIHBsYXllci5wbGF5KCk7XHJcbiAgfSk7XHJcbiAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllclNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGxldCBwbGF5ZXJNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1c2hpLXZpZGVvJyk7XHJcblxyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllck1haW4ucGxheSgpO1xyXG4gIC8vIC8vIGNvbnN0IHBsYXllclNwbGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VzaGktc3R5bGVfX3BsYXktd3JhcHBlclwiKTtcclxuICAvLyAvLyBwbGF5ZXIudm9sdW1lID0gXCIwLjAwNVwiO1xyXG4gIC8vIHBsYXllclNwbGFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gICBwbGF5ZXJTcGxhc2guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIC8vICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAvLyAgIHBsYXllci5wbGF5KCk7XHJcbiAgLy8gfSk7XHJcbiAgLy8gcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAvLyAgIHBsYXllclNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIC8vICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgLy8gfSk7XHJcbiB9OyJdLCJmaWxlIjoic3VzaGkuanMifQ==
