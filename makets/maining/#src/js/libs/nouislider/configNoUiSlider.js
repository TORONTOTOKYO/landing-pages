@@include("nouislider.min.js");

// Dropdown
const dropdown = document.querySelector(".dropdown");
const dropdownArrow = document.querySelector(".dropdown__arrow-image");
const dropdownHidden = document.querySelector(".dropdown__hidden");
const dropdownHiddenItem = document.querySelectorAll(".dropdown__hidden-item");
const okayImg = document.querySelector(".dropdown__okay-image");
const currencyDiv = document.querySelector(".currency");
const coastContractDiv = document.querySelector(".coast");
const totalProfit = document.querySelector(".total-profit");
var slider = document.getElementById("slider");
var sliderSecond = document.getElementById("sliderSecond");
const inputPower = document.getElementById("inputPower");
const inputTurn = document.getElementById("inputTurn");

const inputs = [inputPower, inputTurn];
const sliders = [slider, sliderSecond];

let powerInput = inputPower.value;
let dayInput = inputTurn.value;

noUiSlider.create(slider, {
  start: [10],
  connect: "lower",
  step: 1,
  range: {
    min: 10,
    max: 1000,
  },
});

noUiSlider.create(sliderSecond, {
  start: [90],
  connect: "lower",
  step: 1,
  range: {
    min: 90,
    max: 365,
  },
});

const setRangeSlider = (i, value) => {
  sliders[i].noUiSlider.set(value);
};

inputs.forEach((item, index) => {
  item.addEventListener("change", (e) => {
    setRangeSlider(index, e.target.value);
  });
});

// <!------------------------------------------------------------------------------>

// Добавление выбраной валюты в главное окно выбора валюты
addCard = (item) => {
  dropdown.firstElementChild.remove();
  dropdown.prepend(item);
  currencyDiv.textContent = dropdown.textContent;
  addValueCoastContract(inputsValues);
};

// Слушатель выпадающие меню
dropdown.addEventListener("click", function () {
  dropdownArrow.classList.toggle("dropdown__arrow-rotate");
  dropdownHidden.classList.toggle("visible-menu");

  // Добавляем галочку на выбранную валюту, закрываем список и поворачиваем стрелку
  dropdownHiddenItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      item.appendChild(okayImg);
      dropdownArrow.classList.remove("arrow-rotate");
      dropdownHidden.classList.remove("visible-menu");
      // Копируем выбранный айтем и вставляем его в главное окно выбора валюты
      let currentItem = e.target.firstElementChild.cloneNode(true);
      addCard(currentItem);
    });
  });
});

const inputsValues = [powerInput, dayInput];

sliders.forEach((slider, index) => {
  slider.noUiSlider.on("update", function (values) {
    inputs[index].value = Math.round(values);
    inputsValues[index] = Math.round(values);
    addValueCoastContract(inputsValues);
  });
});

function addValueCoastContract(array) {
  let total = array[0] * 5 * array[1];

  coastContractDiv.innerHTML = total + " <span class=info__sup>руб</span>";
  let coastCurrency = dropdown.firstElementChild.getAttribute("data-coast");
  let totalPayCurrency = (total / +coastCurrency).toFixed(4);
  totalProfit.innerHTML =
    totalPayCurrency + ` <span class=info__sup>${dropdown.textContent}<span>`;
}
