// Some mobile browsers need user interaction to play music
document.body.addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  audio.play();
});
