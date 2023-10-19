export function mobileMenuHandler() {
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header-nav-wrapper");
    const menuBtn = document.querySelector(".menu-burger-btn");
    const body = document.body;

    if (menu && menuBtn) {
      menuBtn.addEventListener("click", function () {
        body.classList.toggle("lock");
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active-icon");
      });
    }
    menu.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", function () {
        body.classList.remove("lock");
        menu.classList.remove("active");
        menuBtn.classList.remove("active-icon");
      });
    });
  });
}
