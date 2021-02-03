// Появление стрелки анимация нажатия

const arrow = document.querySelector(".arrow");
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  window.pageYOffset > 50
    ? (arrow.style.display = "flex")
    : (arrow.style.display = "none");
});

arrow.addEventListener("click", function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});
