document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".header-nav-wrapper");
  const menuBtn = document.querySelector(".menu-burger-btn");
  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", function () {
      body.classList.toggle("lock"); // Toggle body scrolling
      menu.classList.toggle("active"); // Toggle menu visibility
      menuBtn.classList.toggle("active-icon"); // Toggle menu icon state
    });
  }
  menu.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      body.classList.remove("lock"); // Toggle body scrolling
      menu.classList.remove("active"); // Toggle menu visibility
      menuBtn.classList.remove("active-icon"); // Toggle menu icon state
    });
  });

  const myHash = document.location.hash.substring(1);
  document.location.hash = "";
  if (myHash) {
    // console.log(myHash);
    scrollToHash(myHash);
  }

  function scrollToHash(myHash) {
    // console.log(myHash);
    document.getElementById(myHash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// event.preventDefault(); // Предотвращаем стандартное поведение ссылки
// const delayMilliseconds = 500; // Задержка в миллисекундах (2 секунды)
// // Запускаем таймер, который выполнит переход по ссылке через задержку
// setTimeout(() => {
//   window.location.href = link.getAttribute("href"); // Выполняем переход
// }, delayMilliseconds);
