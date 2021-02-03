const buttonPopup = document.querySelectorAll(".button-popup");
const closePopup = document.querySelector(".popup__button-closed");
const closePopupIcon = document.querySelector(".popup__button-icon");
const popupOverlay = document.querySelector(".popup__overlay");
const popupModal = document.querySelector(".popup__modal");

buttonPopup.forEach((button) => {
  button.addEventListener("click", function () {
    popupOverlay.classList.add("popup__overlay--visible");
    popupModal.classList.add("popup__modal--visible");
  });
});

popupOverlay.addEventListener("click", function (e) {
  if (
    e.target === popupOverlay ||
    e.target === closePopup ||
    e.target === closePopupIcon
  ) {
    this.classList.remove("popup__overlay--visible");
    popupModal.classList.remove("popup__modal--visible");
  }
});
