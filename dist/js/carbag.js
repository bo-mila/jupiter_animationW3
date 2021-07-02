let player = document.getElementById('carbag2-video');
  const playerSplash = document.querySelector(".carbag-func__play-wrapper");
  player.volume = "0.003";
  playerSplash.addEventListener("click", function() {
    playerSplash.style.display = "none";
    player.style.opacity = "1";

    player.play();
  });
  player.addEventListener("ended", function() {
    playerSplash.style.display = "block";
    player.style.opacity = "0";

  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYXJiYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJiYWcyLXZpZGVvJyk7XHJcbiAgY29uc3QgcGxheWVyU3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJiYWctZnVuY19fcGxheS13cmFwcGVyXCIpO1xyXG4gIHBsYXllci52b2x1bWUgPSBcIjAuMDAzXCI7XHJcbiAgcGxheWVyU3BsYXNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllclNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBwbGF5ZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG5cclxuICAgIHBsYXllci5wbGF5KCk7XHJcbiAgfSk7XHJcbiAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHBsYXllclNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgcGxheWVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgfSk7Il0sImZpbGUiOiJjYXJiYWcuanMifQ==
