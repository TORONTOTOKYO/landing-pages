const btn = document.querySelector(".btn");
const headerContent = document.querySelector(".nav");

window.addEventListener(
  "resize",
  (event) => {
    if (window.matchMedia("(max-width: 992px)").matches) {
      if (headerContent.children.length === 1) {
        let btnClone = btn.cloneNode(true);
        btn.style.display = "none";
        headerContent.appendChild(btnClone);
      }
    } else {
      headerContent.children.length === 2
        ? headerContent.lastElementChild.remove()
        : null;
      btn.style.display = "block";
    }
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (window.matchMedia("(max-width: 992px)").matches) {
      if (headerContent.children.length === 1) {
        let btnClone = btn.cloneNode(true);
        btn.style.display = "none";
        headerContent.appendChild(btnClone);
      }
    } else {
      headerContent.children.length === 2
        ? headerContent.lastElementChild.remove()
        : null;
      btn.style.display = "block";
    }
  },
  false
);
