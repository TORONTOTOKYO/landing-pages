const blogContent = document
  .querySelectorAll(".blog-content")
  .forEach((textContent) => {
    if (
      textContent.nextElementSibling &&
      window.matchMedia("(max-width: 992px)").matches
    ) {
      textContent.style.marginBottom = 20 + "px";
    }
  });

if (window.matchMedia("(max-width: 992px)").matches) {
  const animation = document.querySelectorAll("[data-aos]");
  animation.forEach((div) => div.removeAttribute("data-aos"));
}
window.addEventListener("load", AOS.refresh);

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 160, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines whic
});
