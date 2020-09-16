const about = document.querySelector(".about");
const project = document.querySelector(".project");
const contact = document.querySelector(".contact");

////////////////////////////////////////////////////
// Navbar with toggle button
const navToggle = document.getElementById("btnHamburger");
const linksContainer = document.querySelector(".header__container");
const link = document.querySelector(".scroll-link");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});
