// Добавление фона к карточкам
const cardSolutions = document.querySelectorAll(".solutions__item");

const backgroundCardTop = {
  0: "img/solutions/back-icon/1.png",
  1: "img/solutions/back-icon/2.png",
  2: "img/solutions/back-icon/3.png",
  3: "img/solutions/back-icon/4.png",
  4: "img/solutions/back-icon/5.png",
  5: "img/solutions/back-icon/6.png",
  6: "img/solutions/back-icon/7.png",
  7: "img/solutions/back-icon/8.png",
  8: "img/solutions/back-icon/9.png",
  9: "img/solutions/back-icon/10.png",
};

cardSolutions.forEach((card, index) => {
  card.style.background = `url(${backgroundCardTop[index]}) center no-repeat`;
  card.style.backgroundSize = "cover";
});

// Инициализация скрытого текста
window.onload = function () {
  const buttonReadMore = document.querySelector(".mrc-btn");

  buttonReadMore.classList.add("down");

  buttonReadMore.addEventListener("click", function () {
    if (this.classList.contains("down")) {
      this.classList.remove("down");
      this.classList.add("up");
    } else {
      this.classList.remove("up");
      this.classList.add("down");
    }
  });
};

$("[data-mrc]").moreContent({
  height: 50,
  textClose: "Посмотреть решения",
});

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

// Плавная прокрутка сайта

SmoothScroll({
  animationTime: 600,
  stepSize: 80,
});
