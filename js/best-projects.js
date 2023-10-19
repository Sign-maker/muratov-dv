import { mobileMenuHandler } from "./mobile-menu.js";
import { goTopBtnHandler } from "./go-top-btn.js";
import { bindFancybox, makeCarousel } from "./fancybox-functions.js";

getCarousels();
mobileMenuHandler();
goTopBtnHandler();
bindFancyboxes();

function getCarousels() {
  const container = document.getElementById("best-projects-page-carousel-1");
  const container2 = document.getElementById("best-projects-page-carousel-2");
  const container3 = document.getElementById("best-projects-page-carousel-3");
  const container4 = document.getElementById("best-projects-page-carousel-4");
  const container5 = document.getElementById("best-projects-page-carousel-5");
  const container6 = document.getElementById("best-projects-page-carousel-6");
  const container7 = document.getElementById("best-projects-page-carousel-7");
  const container8 = document.getElementById("best-projects-page-carousel-8");
  const container9 = document.getElementById("best-projects-page-carousel-9");
  const container10 = document.getElementById("best-projects-page-carousel-10");
  const container11 = document.getElementById("best-projects-page-carousel-11");

  makeCarousel(container);
  makeCarousel(container2);
  makeCarousel(container3);
  makeCarousel(container4);
  makeCarousel(container5);
  makeCarousel(container6);
  makeCarousel(container7);
  makeCarousel(container8);
  makeCarousel(container9);
  makeCarousel(container10);
  makeCarousel(container11);
}

function bindFancyboxes() {
  bindFancybox("#best-project-1-gallery a");
  bindFancybox("#best-project-2-gallery a");
  bindFancybox("#best-project-3-gallery a");
  bindFancybox("#best-project-4-gallery a");
  bindFancybox("#best-project-5-gallery a");
  bindFancybox("#best-project-6-gallery a");
  bindFancybox("#best-project-7-gallery a");
  bindFancybox("#best-project-8-gallery a");
  bindFancybox("#best-project-9-gallery a");
  bindFancybox("#best-project-10-gallery a");
  bindFancybox("#best-project-11-gallery a");
}
