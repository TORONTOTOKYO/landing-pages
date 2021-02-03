const tabsBtn = document.querySelectorAll(".features-tabs__btn");
const tabsList = document.querySelectorAll(".features-tabs__list");

tabsBtn.forEach((button, index) => {
  button.addEventListener("click", function () {
    tabsBtn.forEach((buttonActive, index) => {
      buttonActive.matches(".active")
        ? buttonActive.classList.remove("active")
        : null;
      tabsList[index].matches(".active")
        ? tabsList[index].classList.remove("active")
        : null;
    });
    this.classList.add("active");
    tabsList[index].classList.add("active");
  });
});
