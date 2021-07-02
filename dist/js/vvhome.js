let player = document.getElementById('vvhome2-video');
  const playerSplash = document.querySelector(".vvhome-video__play-wrapper");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2dmhvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2dmhvbWUyLXZpZGVvJyk7XHJcbiAgY29uc3QgcGxheWVyU3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52dmhvbWUtdmlkZW9fX3BsYXktd3JhcHBlclwiKTtcclxuICBwbGF5ZXIudm9sdW1lID0gXCIwLjAwNVwiO1xyXG4gIHBsYXllclNwbGFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBwbGF5ZXJTcGxhc2guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIHBsYXllci5wbGF5KCk7XHJcbiAgfSk7XHJcbiAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllclNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgfSk7Il0sImZpbGUiOiJ2dmhvbWUuanMifQ==
