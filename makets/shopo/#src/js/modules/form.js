document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(evt) {
    evt.preventDefault();

    let error = formValidate(form);

    let Data = new FormData(form);
    Data.append("image", formImage.files[0]);

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("mail.php", {
        method: "POST",
        body: Data,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = "";
        form.reset();
        form.classList.remove("_sending");
      } else {
        console.log(response.statusText);
        form.classList.remove("_sending");
      }
    } else {
      openModal(
        popupOverlayContacts,
        popupModalWrapperContacts,
        popupModalContacts
      );
    }
  }

  function formValidate(form) {
    let error = 0;

    let formReq = document.querySelectorAll("._req");

    formReq.forEach((item) => {
      const input = item;

      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked == false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    });
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");

    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  const formImage = document.querySelector("#formImage");
  const formPreview = document.querySelector("#formPreview");

  formImage.addEventListener("change", function () {
    uploadFile(formImage.files[0]);
  });

  function uploadFile(file) {
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      alert("Разрешены только изображения");
      formImage.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Большой файл!");
      return;
    }
    const reader = new FileReader();

    reader.onload = function (evt) {
      formPreview.innerHTML = `<img src='${evt.target.result}' alt='Фото'/>`;
    };

    reader.onerror = function (evt) {
      alert("Ошибка");
    };

    reader.readAsDataURL(file);
  }
});
