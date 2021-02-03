const buttonBurger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");
const menuLink = document.querySelectorAll(".nav__link");

// По клику на линки в меню, закрывается само меню
function closedMenu(links) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active-menu");
      buttonBurger.classList.remove("active");
      scrollLock.enablePageScroll();
    });
  });
}

buttonBurger.addEventListener("click", function () {
  this.classList.toggle("active");

  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    if (this.classList.contains("active")) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }

  burgerMenu.classList.toggle("active-menu");
  menuLink.forEach((link) => {
    link.classList.toggle("active-link");
  });
});
