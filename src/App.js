const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

// function toggleButton() {
//   navList.classList.toggle("show");
// }

// hamburgerButton.addEventListener("click", toggleButton);

hamburgerButton.onclick = () => {
  hamburgerButton.classList.toggle("open");
  navList.classList.toggle("slide")
};

const navbar = document.querySelector(".navbar");
const bar = document.getElementById("bar");
window.onscroll = () => {
  if (window.scrollY >= 980) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
