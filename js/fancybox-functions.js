import { Fancybox } from "./fancybox.esm.js";
import { Carousel } from "./carousel.esm.js";

export function destroyFancybox() {
  Fancybox.destroy();
}

export function bindFancybox(data) {
  const options = {
    Images: {
      protected: true,
    },
    groupAll: true,
    compact: false,
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["fullscreen", "iterateZoom", "close"],
      },
    },
    Thumbs: {
      type: false,
    },
  };
  Fancybox.bind(data, options);
}

export function makeCarousel(container) {
  const options = {
    // preload: 1,
    Dots: false,
    center: true,
    infinite: false,

    // fill: false,
    // slidesPerPage: 3,

    // Navigation: false,

    Panzoom: {
      // decelFriction: 0.12,
      dragMinThreshold: 20,
      maxVelocity: 50,
      // dragFriction: 0.05,
    },
    Thumbs: false,
    breakpoints: {
      dragMinThreshold: 10,
      "(min-width: 767px)": {
        Navigation: true,
      },
    },
  };
  const a = new Carousel(container, options);
  // console.log(a);
  // const options = {
  //   infinite: false,
  //   Dots: true,
  //   // Navigation: false,

  //   // Thumbs: {
  //   //   type: "classic",
  //   //   Carousel: {
  //   //     slidesPerPage: 1,
  //   //     Navigation: true,
  //   //     center: true,
  //   //     fill: true,
  //   //     dragFree: true,
  //   //   },
  //   // },
  //   // content: null,
  //   // width: "auto",
  //   // height: "auto",
  //   // panMode: "drag",
  //   // touch: !0,
  //   // dragMinThreshold: 3,
  //   // lockAxis: !1,
  //   // mouseMoveFactor: 1,
  //   // mouseMoveFriction: 1,
  //   // zoom: !0,
  //   // pinchToZoom: !0,
  //   // panOnlyZoomed: "auto",
  //   // minScale: 1,
  //   // maxScale: 2,
  //   // friction: 0.25,
  //   // dragFriction: 0.35,
  //   // decelFriction: 0.05,
  //   // click: "toggleZoom",
  //   // dblClick: !1,
  //   // wheel: "zoom",
  //   // wheelLimit: 7,
  //   // spinner: !0,
  //   // bounds: "auto",
  //   // infinite: !1,
  //   // rubberband: !0,
  //   // bounce: !0,
  //   // maxVelocity: 75,

  //   Panzoom: {
  //     // decelFriction: 0.12,
  //     dragMinThreshold: 20,
  //     maxVelocity: 50,
  //     // dragFriction: 0.3,
  //   },

  //   Thumbs: false,
  //   breakpoints: {
  //     "(min-width: 768px)": {
  //       Dots: false,
  //       dragMinThreshold: 10,
  //       // Navigation: true,
  //       Thumbs: {
  //         type: "classic",
  //         //   Carousel: {
  //         //     Navigation: true,
  //         //   },
  //       },
  //     },
  //   },
  // };

  // const myCourusel1 = new Carousel(container, options, { Thumbs });
}
