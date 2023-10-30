import debounce from "./debounce.js";

export function navHandler() {
  document.addEventListener("DOMContentLoaded", onLoad);

  function onLoad(event) {
    const ACTIVE_LINK = "active-link";
    const MAX_MOBILE_WIDTH = 1199;
    const MAIN_PAGE_ID = "main";
    const JS_ACTIVE = "active";
    const JS_ACTIVE_ICON = "active-icon";
    const JS_LOCK = "lock";

    const targetsRef = document.querySelectorAll("section[data-section-id]");
    const elForCompensationRef = document.querySelector("header");
    const menuLinksRef = document.querySelectorAll("[data-nav-id]");
    const bodyRef = document.querySelector("body");
    const menuBtnRef = document.querySelector(".menu-burger-btn");
    const menuWrapperRef = document.querySelector(".header-nav-wrapper");
    const allMenuLinks = document.querySelectorAll(".nav-link, .address-link");

    if (menuLinksRef) {
      window.addEventListener("scroll", debounce(100, scrollHandler));
    }
    menuBtnRef.addEventListener("click", menuVisibillityToggle);
    allMenuLinks.forEach((menuLink) =>
      menuLink.addEventListener("click", menuLinkHandler)
    );
    window.addEventListener("resize", windowResizeHandler);

    let currentActiveLinkId = getActiveTargetElId(targetsRef);
    let isMobileMenuActive = menuBtnRef.classList.contains(JS_ACTIVE)
      ? true
      : false;

    markActiveLinkById(menuLinksRef, currentActiveLinkId);

    function windowResizeHandler() {
      const windowWidth = window.innerWidth;
      if (windowWidth > MAX_MOBILE_WIDTH && isMobileMenuActive) {
        menuVisibillityToggle();
      }
    }

    function menuLinkHandler(event) {
      if (
        !(event.currentTarget.hash && bodyRef.dataset.pageId === MAIN_PAGE_ID)
      ) {
        if (isMobileMenuActive) {
          menuVisibillityToggle();
        }
        return;
      }

      event.preventDefault();
      const currentHash = event.currentTarget.hash.substring(1);

      if (isMobileMenuActive) {
        menuVisibillityToggle();
      }

      scrollToHash(currentHash);
    }

    function menuVisibillityToggle() {
      menuWrapperRef.classList.toggle(JS_ACTIVE);
      bodyRef.classList.toggle(JS_LOCK);
      menuBtnRef.classList.toggle(JS_ACTIVE_ICON);
      isMobileMenuActive = !isMobileMenuActive;
      // console.log(isMobileMenuActive);
    }

    function getActiveTargetElId(targetsRef) {
      let activeTargetElId = null;

      targetsRef.forEach((targetEl) => {
        if (isTargetElInViewport(targetEl, elForCompensationRef)) {
          activeTargetElId = targetEl.dataset.sectionId;
        }
      });
      return activeTargetElId;
    }

    function markActiveLinkById(linksRef, linkId) {
      if (!menuLinksRef) {
        return;
      }
      linksRef.forEach((link) => {
        if (link.dataset.navId === linkId) {
          link.classList.add(ACTIVE_LINK);
        } else link.classList.remove(ACTIVE_LINK);
      });
    }

    function isTargetElInViewport(targetEl, elForCompensation) {
      if (!targetEl) {
        return;
      }
      const compensation = elForCompensation
        ? elForCompensation.clientHeight
        : 0;
      const scrollDistance = window.scrollY;
      const offsetTop = targetEl.offsetTop;
      const targetHeight = targetEl.clientHeight;
      const currentTargetTopPosRelToWindow =
        offsetTop - scrollDistance - compensation - 4; //какие-то бока с scrollY

      const result =
        currentTargetTopPosRelToWindow <= 0 &&
        currentTargetTopPosRelToWindow >= targetHeight * -1;
      return result;
    }

    function scrollHandler() {
      currentActiveLinkId = getActiveTargetElId(targetsRef);
      markActiveLinkById(menuLinksRef, currentActiveLinkId);
    }

    function scrollToHash(hash) {
      document.getElementById(hash).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}

// console.log(event);
// const { target } = event;
// event.preventDefault();
// setTimeout(() => {
//   window.location.hash = target.location.hash;
//   // console.log("qqq");
// }, 1000);

// window.addEventListener("hashchange", onHashChange);

// function onHashChange(event) {
//   console.log(event);
//   // event.preventDefault();
//   const myHash = event.currentTarget.location.hash.substring(1);
//   console.log(myHash);
//   scrollToHash(myHash);
// }

// function onAnchorClick(event) {
//   if (bodyRef.classList.contains("lock")) {
//     return;
//   }
//   event.preventDefault();
//   const myHash = event.currentTarget.getAttribute("href").substring(1);
//   // markActiveLinkByHash(myHash);
//   scrollToHash(myHash);
// }
// function markActiveLinkByHash(currentAnchor) {
//   navLinksWithHashRef.forEach((navLink) => {
//     if (currentAnchor === navLink.getAttribute("href").substring(1)) {
//       navLink.classList.add(ACTIVE_LINK);
//     } else navLink.classList.remove(ACTIVE_LINK);
//   });
// }
