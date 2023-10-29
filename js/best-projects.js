import { navHandler } from "./nav-functions.js";
import { goTopBtnHandler } from "./go-top-btn.js";
import { bindFancybox, makeCarousel } from "./fancybox-functions.js";

makeCarousels(11);
navHandler();
goTopBtnHandler();
bindFancyboxes(11);

function makeCarousels(num) {
  for (let i = 1; i <= num; i += 1) {
    makeCarousel(document.querySelector(`#best-projects-page-carousel-${i}`));
  }
}

function bindFancyboxes(num) {
  for (let i = 1; i <= num; i += 1) {
    addAttributeToGroup(
      `#best-project-${i}-gallery a`,
      "data-fancybox",
      `best-project-${i}-gallery`
    );
    bindFancybox(`[data-fancybox="best-project-${i}-gallery"]`);
  }
}

function addAttributeToGroup(groupSelector, attributeName, attributeValue) {
  const galleryItemsRef = document.querySelectorAll(groupSelector);
  galleryItemsRef.forEach((item) =>
    item.setAttribute(attributeName, attributeValue)
  );
}
