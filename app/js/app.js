const hamburger = document.getElementById("btnHamburger");
const navbar = document.querySelector(".navbar");

const about = document.querySelector(".about");
const project = document.querySelector(".project");
const contact = document.querySelector(".contact");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});
