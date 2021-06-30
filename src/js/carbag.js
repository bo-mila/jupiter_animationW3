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