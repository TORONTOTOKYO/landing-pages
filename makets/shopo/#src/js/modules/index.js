const buttonSwitchIntro = document.querySelector(".intro__button-power");
const iconButtonSwitchIntro = document.querySelector(".intro__btn-icon");
const buttonBurger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__menu");
const menuLink = document.querySelectorAll(".header__menu-link");
const servicesButtons = document.querySelectorAll(".services__content-button");
const servicesBody = document.querySelector(".services__item-body");
const servicesItem = document.querySelector(".services__item");
const cardWorkers = document.querySelectorAll(".team__item");
const popupButton = document.querySelector(".intro__button");
// POPUP-INTRO
const popupOverlay = document.querySelector(".popup__overlay--intro");
const popupModalWrapper = document.querySelector(
  ".popup__modal-wrapper--intro"
);
const popupModal = document.querySelector(".popup__modal--intro");
// ./POPUP-INTRO

// POPUP-CONTACTS
const popupOverlayContacts = document.querySelector(
  ".popup__overlay--contacts"
);
const popupModalWrapperContacts = document.querySelector(
  ".popup__modal-wrapper--contacts"
);
const popupModalContacts = document.querySelector(".popup__modal--contacts");
const popupButtonClosedContacts = document.querySelector(
  ".popup__button-closed--intro"
);
const popupButtonIconContacts = document.querySelector(
  ".popup__button-icon--contacts"
);
// ./POPUP-CONTACTS

const popupButtonClosed = document.querySelector(".popup__button-closed");
const popupButtonIcon = document.querySelector(".popup__button-icon");
const headerMenuLink = document.querySelectorAll(".header__menu-link");
const body = document.querySelector("body");

window.addEventListener("load", AOS.refresh);

// FUNCTION DECLARATION
function buttonSwitchbtn() {
  let btn = 0;
  let timerID;

  buttonSwitchIntro.addEventListener("click", function () {
    iconButtonSwitchIntro.classList.toggle("intro__btn-icon--active");
    if (btn % 2 === 0) {
      timerID = window.setInterval(rainHearts, 300);
      btn++;
    } else {
      clearInterval(timerID);
      const heart = document
        .querySelectorAll(".heart")
        .forEach((item) => item.remove());
      btn++;
    }
  });
}

function rainHearts() {
  const heart = document.createElement("div");
  const img = document.createElement("img");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  img.style.height = 20 + "px";
  img.src = "../img/intro/drop.svg";

  heart.appendChild(img);
  document.body.appendChild(heart);
}

function tapServicesButton(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", function (evt) {
      const buttonAttribute = evt.currentTarget.getAttribute("data-path");

      const getItemByAttribute = document.querySelector(
        `[data-target='${buttonAttribute}']`
      );

      const firstChildItemAttribute = getItemByAttribute.firstElementChild;
      //Убираем лицевую сторону карточки
      firstChildItemAttribute.classList.remove("services__item--visible");
      firstChildItemAttribute.classList.add("services__item--hidden");
      // Показываем внутренний контент карточки
      const hiddenItemServices = document.createElement("div");
      hiddenItemServices.classList.add("item-hidden");

      const wrapperHiddenItem = document.createElement("div");
      wrapperHiddenItem.classList.add("item-hidden__wrapper");
      getItemByAttribute.getAttribute("data-size") &&
        wrapperHiddenItem.classList.add("item-hidden__wrapper--small");

      wrapperHiddenItem.appendChild(hiddenItemServices);

      const hiddenItemServicesTitle = document.createElement("div");
      hiddenItemServicesTitle.classList.add("item-hidden__title");
      const title = titleItemServices[buttonAttribute];
      hiddenItemServicesTitle.textContent = title;
      getItemByAttribute.getAttribute("data-size") &&
        hiddenItemServicesTitle.classList.add("item-hidden__title--small");
      hiddenItemServices.appendChild(hiddenItemServicesTitle);

      const hiddenItemServicesText = document.createElement("div");
      hiddenItemServicesText.classList.add("item-hidden__text");
      getItemByAttribute.getAttribute("data-size") &&
        hiddenItemServicesText.classList.add("item-hidden__text--small");
      const text = textItemServices[buttonAttribute];
      hiddenItemServicesText.textContent = text;
      hiddenItemServices.appendChild(hiddenItemServicesText);

      const hiddenItemButtonClosed = document.createElement("button");
      hiddenItemButtonClosed.classList.add("item-hidden__button-closed");
      hiddenItemServices.appendChild(hiddenItemButtonClosed);

      getItemByAttribute.appendChild(wrapperHiddenItem);

      hiddenItemButtonClosed.addEventListener("click", function () {
        wrapperHiddenItem.remove();
        firstChildItemAttribute.classList.remove("services__item--hidden");
        firstChildItemAttribute.classList.toggle("services__item--visible");
      });
    });
  });
}

function tapTeamCard(cards) {
  cards.forEach((card) => {
    card.addEventListener("click", function (evt) {
      const getItemByAttribute = evt.currentTarget.getAttribute("data-card");

      const hiddenItemWorker = document.querySelector(
        `[data-target='${getItemByAttribute}']`
      );

      hiddenItemWorker.classList.toggle("team__person--visible");
    });
  });
}

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

function openModal(overlay, wrapper, modal) {
  if (wrapper.style.animation) {
    wrapper.style.animation = null;
  }
  overlay.classList.toggle("popup__overlay--visible");
  wrapper.classList.toggle("popup__modal-wrapper--visible");
  modal.classList.toggle("popup__modal--visible");
  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    scrollLock.disablePageScroll();
  }
}

function closedPopup(evt, overlay, wrapper, modal, button, buttonIcon) {
  if (
    evt.target === overlay ||
    evt.target === button ||
    evt.target === buttonIcon
  ) {
    wrapper.style.animation = "hiddenModal 1s linear forwards";
    overlay.classList.remove("popup__overlay--visible");
    modal.classList.remove("popup__modal--visible");
    window.setTimeout(() => {
      wrapper.classList.remove("popup__modal-wrapper--visible");
    }, 100);
  }

  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    scrollLock.enablePageScroll();
  }
}

popupOverlay.addEventListener("click", (evt) =>
  closedPopup(evt, popupOverlay, popupModalWrapper, popupModal)
);

popupButtonClosed.addEventListener("click", (evt) =>
  closedPopup(
    evt,
    popupOverlay,
    popupModalWrapper,
    popupModal,
    popupButtonClosed
  )
);

popupButtonClosedContacts.addEventListener("click", (evt) =>
  closedPopup(
    evt,
    popupOverlayContacts,
    popupModalWrapperContacts,
    popupModalWrapperContacts,
    popupButtonClosed
  )
);

popupOverlayContacts.addEventListener("click", (evt) =>
  closedPopup(
    evt,
    popupOverlayContacts,
    popupModalWrapperContacts,
    popupModalContacts,
    popupButtonClosedContacts
  )
);

popupButtonIcon.addEventListener("click", (evt) =>
  closedPopup(
    evt,
    popupOverlay,
    popupModalWrapper,
    popupModal,
    popupButtonClosed,
    popupButtonIcon
  )
);
popupButtonIconContacts.addEventListener("click", (evt) =>
  closedPopup(
    evt,
    popupOverlayContacts,
    popupModalWrapperContacts,
    popupModalContacts,
    popupButtonClosedContacts,
    popupButtonIconContacts
  )
);

popupButton.addEventListener("click", () =>
  openModal(popupOverlay, popupModalWrapper, popupModal)
);

// SLIDER

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });
  $(".slider-say").slick({
    dots: true,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true,
  });
});

// Function call
buttonSwitchbtn();
tapServicesButton(servicesButtons);
tapTeamCard(cardWorkers);
closedMenu(headerMenuLink);

// LISTENERS

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

const textItemServices = {
  one:
    "Медиаплан — это не просто список площадок, на которых планируется закупка рекламы. С его помощью мы запланируем объем закупки выбранных форматов, частоту контакта с аудиторией, количество переходов с рекламы на посадочную страницу и конверсию в целевое действие.",
  second:
    "К сожалению, любой рекламодатель не застрахован от сбоя в performance кампании. В такой ситуации важно максимально оперативно найти источник сбоя и принять меры по его устранению. По нашему опыту значительная часть такого рода случаев происходит в результате привлечения нецелевых источников трафика. ",
  three:
    "В основе любой успешной рекламной кампании лежит яркая, релевантная аудитории идея. Если медийные или контекстные решения приводят нужного нам пользователя по правильному адресу, то креативное (контентное) решение сформирует в его голове нужную нам эмоцию и, как результат, потребность в продукте или услуге.",
  four:
    "Социальные сети являются полноценным медийным каналом, в котором мы решаем коммуникационные задачи наших клиентов. Поэтому стартовой точкой любой интеграции бренда в контент социальных сетей становится разработка SMM‑стратегии.",
  five:
    "В основе любой контекстной кампании, которую мы проводим, лежат стратегические решения. Они позволяют сначала определить, а потом успешно достигнуть заданные KPI. Именно поэтому мы называем себя performance-агентством, работающим на достижение заданных в стратегии KPI.",
  six:
    "Производство – важнейший этап в процессе создания любого вида рекламного материала. Даже самая яркая идея может измениться до неузнаваемости в процессе воплощения без должного контроля на этапе производства. Именно поэтому мы предлагаем нашим клиентам услуги in-house департамента по сопровождению производства рекламных материалов. ",
};

const titleItemServices = {
  one: "Медиаплан",
  second: "Аудит трафика",
  three: "Креативная концепция",
  four: "SMM-стратегия",
  five: "Контекстная стратегия",
  six: "Продакшн",
};

// ANIMATION

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 130, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease-in", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "bottom-top", // defines which position of the element regarding to window should trigger the animation
});
