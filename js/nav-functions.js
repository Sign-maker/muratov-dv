import debounce from "./debounce.js";

export function navHandler() {
  document.addEventListener("DOMContentLoaded", onLoad);

  function onLoad(event) {
    // console.log(event);
    const { target } = event;
    event.preventDefault();
    setTimeout(() => {
      window.location.hash = target.location.hash;
      // console.log("qqq");
    }, 500);
    const ACTIVE_LINK = "active-link";
    const navLinksWithHashRef = document.querySelectorAll(
      '.nav-link[href*="#"]'
    );
    const targetsRef = document.querySelectorAll("section[data-section-id]");
    const elForCompensationRef = document.querySelector("header");
    const menuLinksRef = document.querySelectorAll("[data-nav-id]");

    // navLinksWithHashRef.forEach((anchor) =>
    //   anchor.addEventListener("click", onAnchorClick)
    // );

    let currentActiveLinkId = getActiveTargetElId(targetsRef);
    markActiveLinkById(menuLinksRef, currentActiveLinkId);

    window.addEventListener("scroll", debounce(100, scrollHandler));

    function onAnchorClick(event) {
      event.preventDefault();
      const myHash = event.currentTarget.getAttribute("href").substring(1);
      // markActiveLinkByHash(myHash);
      scrollToHash(myHash);
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

    function scrollToHash(myHash) {
      document.getElementById(myHash).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    function markActiveLinkByHash(currentAnchor) {
      navLinksWithHashRef.forEach((navLink) => {
        if (currentAnchor === navLink.getAttribute("href").substring(1)) {
          navLink.classList.add(ACTIVE_LINK);
        } else navLink.classList.remove(ACTIVE_LINK);
      });
    }
  }
}
