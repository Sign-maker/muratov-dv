export function mobileMenuHandler() {
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".header-nav-wrapper");
    const menuBtn = document.querySelector(".menu-burger-btn");
    const body = document.body;
    let windowWidth = window.innerWidth;

    manageListeners(windowWidth);
    window.addEventListener("resize", windowResizeHandler);

    function windowResizeHandler() {
      windowWidth = window.innerWidth;
      manageListeners(windowWidth);
    }

    function manageListeners(windowWidth) {
      if (menu && menuBtn) {
        if (windowWidth < 1200) {
          menuBtn.addEventListener("click", menuBtnClickHandler);
          menu.addEventListener("click", menuClickHandler);
        } else {
          body.classList.remove("lock");
          menu.classList.remove("active");
          menuBtn.classList.remove("active-icon");
          menuBtn.removeEventListener("click", menuBtnClickHandler);
          menu.removeEventListener("click", menuClickHandler);
        }
      }
    }

    function menuClickHandler(event) {
      const { target } = event;
      if (
        !(
          (
            target.classList.contains("header-nav-wrapper") ||
            target.classList.contains("menu-link") ||
            target.closest(".menu-link")
          ) //if translator
        )
      ) {
        return;
      }
      event.preventDefault();

      setTimeout(() => {
        window.location = target.href;
      }, 1000);

      body.classList.remove("lock");
      menu.classList.remove("active");
      menuBtn.classList.remove("active-icon");
    }

    function menuBtnClickHandler() {
      body.classList.toggle("lock");
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active-icon");
    }
  });
}
