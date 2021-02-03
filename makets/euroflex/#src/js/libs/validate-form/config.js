const fileInput = document.querySelector('input[type="file"]');
const formImage = document.querySelectorAll(".formImage");
const formPreview = document.querySelectorAll(".file__prieview");

// Функция отправки формы
let validateForms = function (selector, rules, messages, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: messages,
    submitHandler: function (form) {
      const formData = new FormData(form); //собираем все поля формы

      let xhr = new XMLHttpRequest(); //создаем запрос

      xhr.onreadystatechange = function () {
        //проверяем статуст отправки формы
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Щас перезвоню");
          }
        }
      };

      xhr.open("POST", "mail.php", true); //открываем запрос
      xhr.send(formData); //отправляем запрос

      form.reset();
      document
        .querySelector(`${selector}`)
        .querySelector(".file__prieview").innerHTML = "";
    },
  });
};

// Превьюшка для картинки

formImage.forEach((fileImage, index) => {
  fileImage.addEventListener("change", function () {
    uploadFile(fileImage.files[0], index);
  });
});

function uploadFile(file, index) {
  if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
    alert("Разрешены только изображения");
    formImage.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Большой файл!");
    return;
  }
  var reader = new FileReader();

  reader.onload = function (evt) {
    formPreview[
      index
    ].innerHTML = `<img src='${evt.target.result}' alt='Фото'/>`;
  };

  reader.onerror = function (evt) {
    alert("Ошибка");
  };

  reader.readAsDataURL(file);
}

// Форма вверху
validateForms(
  "#form",
  {
    tel: { required: true },
    name: { required: true, minLength: 3, maxLength: 10 },
  },
  {
    name: { minLength: "Минимум 3 символа", maxLength: "Максимум 10 символов" },
  },
  "thanks-popup",
  "send-goal"
);

// Форма внизу
validateForms(
  "#form-bottom",
  {
    tel: { required: true },
    name: { required: true, minLength: 3, maxLength: 10 },
  },
  {
    name: { minLength: "Минимум 3 символа", maxLength: "Максимум 10 символов" },
  },
  "thanks-popup",
  "send-goal"
);

// Форма в сплывающем окне
validateForms(
  "#form-popup",
  {
    tel: { required: true },
    name: { required: true, minLength: 3, maxLength: 10 },
  },
  {
    name: { minLength: "Минимум 3 символа", maxLength: "Максимум 10 символов" },
  },
  "thanks-popup",
  "send-goal"
);
