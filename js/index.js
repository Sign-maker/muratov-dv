import { navHandler } from "./nav-functions.js";
import { goTopBtnHandler } from "./go-top-btn.js";
import { bindFancybox, makeCarousel } from "./fancybox-functions.js";

getCarousels();
goTopBtnHandler();
bindFancyboxes();
navHandler();

function getCarousels() {
  const container1 = document.getElementById("best-projects-carousel");
  const container2 = document.getElementById("portfolio-carousel");

  makeCarousel(container1);
  makeCarousel(container2);
}

function bindFancyboxes() {
  bindFancybox('[data-fancybox="hard-skills-projects-gallary"');
  bindFancybox('[data-fancybox="hard-skills-equipment-gallary"]');
  bindFancybox('[data-fancybox="hard-skills-electro-gallary"]');
  bindFancybox('[data-fancybox="hard-skills-color-gallary"]');
  bindFancybox('[data-fancybox="best-projects-gallery"]');
  bindFancybox('[data-fancybox="portfolio-gallery"]');
}
