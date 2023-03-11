// Auto typing text effect
var typed = new Typed(".result", {
  strings: [
    "Sachin Samal",
    "an Aspirant",
    "a Front-end Developer",
    "a Front-end Engineer",
    "a Web-Designer",
  ],
  typeSpeed: 75,
  backSpeed: 60,
  loop: true,
});

// play music
var myMusic = document.getElementById("music");
var button = document.getElementById("click");

button.onclick = function () {
  if (myMusic.paused) {
    myMusic.play();
    button.src = "./img/pause.png";
  } else {
    myMusic.pause();
    button.src = "./img/play.png";
  }
};

// loader animation
var loader = document.getElementById('loader')

window.addEventListener("load", () => {
  loader.style.display = "none";
})