/*========================SoftScrool===================*/

// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach((anchor) => {
//   anchor.addEventListener("click", (event) => {
//     event.preventDefault();

//     const blockID = anchor.getAttribute("href").substring(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

// Переход с другой страницы
document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(event) {
  event.preventDefault;
  const myHash = location.hash.substring(1);
  location.hash = "";
  if (myHash) scroll(myHash);
}

// Переход на текущей странице

const linksWithAnchors = document.querySelectorAll('a[href*="#"]');
const navLinks = document.querySelectorAll(".nav-link");

linksWithAnchors.forEach(function (linkWithAnchor) {
  linkWithAnchor.addEventListener("click", onClick);
});

function onClick(event) {
  // console.log(event.currentTarget);
  event.preventDefault();
  const currentAnchor = event.currentTarget.getAttribute("href").substring(1);

  scroll(currentAnchor);
}

function scroll(currentAnchor) {
  const currentElement = document.getElementById(currentAnchor);
  // console.log(currentElement);
  markActiveLink(currentAnchor);

  const positionFromTop = currentElement.getBoundingClientRect().top;
  const offset = document.querySelector("header").offsetHeight;

  window.scrollBy({
    top: positionFromTop - offset,
    behavior: "smooth",
  });
}

function markActiveLink(currentAnchor) {
  navLinks.forEach((navLink) => {
    if (currentAnchor === navLink.getAttribute("href").substring(1)) {
      navLink.classList.add("active-page");
    } else navLink.classList.remove("active-page");
  });
}
