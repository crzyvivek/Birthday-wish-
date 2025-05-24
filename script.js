// Some devices block autoplay until user interacts
document.body.addEventListener("click", () => {
  document.getElementById("bg-music").play();
});
