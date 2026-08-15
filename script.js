/* =====================================================
   ADIX MEHRA
   Creative Developer Portfolio
===================================================== */


/* =====================================================
   DOM
===================================================== */

const body = document.body;

const loader = document.getElementById("loader");

const loaderPercent =
  document.getElementById("loaderPercent");

const header =
  document.getElementById("header");

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");

const cursor =
  document.getElementById("cursor");

const cursorRing =
  document.getElementById("cursorRing");



/* =====================================================
   PRELOADER
===================================================== */

let progress = 0;

const loaderInterval = setInterval(() => {

  progress += Math.floor(
    Math.random() * 8
  ) + 2;

  if (progress >= 100) {

    progress = 100;

    clearInterval(loaderInterval);

    loaderPercent.textContent = progress;

    setTimeout(() => {

      loader.classList.add("loaded");

      body.classList.add("page-ready");

    }, 450);

  } else {

    loaderPercent.textContent = progress;

  }

}, 55);



/* =====================================================
   CURSOR
===================================================== */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;

let ringX = mouseX;
let ringY = mouseY;


if (
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  document.addEventListener(
    "mousemove",
    (event) => {

      mouseX = event.clientX;
      mouseY = event.clientY;

    }
  );


  function animateCursor() {

    cursorX +=
      (mouseX - cursorX) * 0.35;

    cursorY +=
      (mouseY - cursorY) * 0.35;


    ringX +=
      (mouseX - ringX) * 0.12;

    ringY +=
      (mouseY - ringY) * 0.12;


    cursor.style.left =
      `${cursorX}px`;

    cursor.style.top =
      `${cursorY}px`;


    cursorRing.style.left =
      `${ringX}px`;

    cursorRing.style.top =
      `${ringY}px`;


    requestAnimationFrame(
      animateCursor
    );

  }


  animateCursor();



  const cursorTargets =
    document.querySelectorAll(
      "a, button, .service-item, .skill-box, .photo-frame"
    );


  cursorTargets.forEach(
    (element) => {

      element.addEventListener(
        "mouseenter",
        () => {

          cursor.classList.add(
            "active"
          );

          cursorRing.classList.add(
            "active"
          );

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          cursor.classList.remove(
            "active"
          );

          cursorRing.classList.remove(
            "active"
          );

        }
      );

    }
  );

}



/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticElements =
  document.querySelectorAll(
    ".magnetic"
  );


if (
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  magneticElements.forEach(
    (element) => {

      element.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            element.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;


          element.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

        }
      );


      element.addEventListener(
        "mouseleave",
        () => {

          element.style.transform =
            "translate(0, 0)";

        }
      );

    }
  );

}



/* =====================================================
   HEADER SCROLL
===================================================== */

function updateHeader() {

  if (window.scrollY > 60) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();



/* =====================================================
   MOBILE MENU
===================================================== */

menuButton.addEventListener(
  "click",
  () => {

    const isOpen =
      menuButton.classList.toggle(
        "active"
      );


    navLinks.classList.toggle(
      "active"
    );


    body.classList.toggle(
      "menu-open",
      isOpen
    );


    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  }
);



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document
  .querySelectorAll(".nav-link")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        menuButton.classList.remove(
          "active"
        );

        navLinks.classList.remove(
          "active"
        );

        body.classList.remove(
          "menu-open"
        );

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            const delay =
              entry.target.dataset.delay ||
              0;


            setTimeout(
              () => {

                entry.target.classList.add(
                  "visible"
                );

              },
              Number(delay)
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12,

      rootMargin:
        "0px 0px -50px 0px"
    }
  );


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);



/* =====================================================
   PARALLAX HERO IMAGE
===================================================== */

const heroImage =
  document.getElementById(
    "heroImage"
  );


if (
  heroImage &&
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  heroImage.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroImage.getBoundingClientRect();


      const x =
        (event.clientX -
          rect.left) /
        rect.width -
        0.5;


      const y =
        (event.clientY -
          rect.top) /
        rect.height -
        0.5;


      heroImage.style.transform =
        `
          rotate(0deg)
          perspective(900px)
          rotateY(${x * 5}deg)
          rotateX(${y * -5}deg)
        `;

    }
  );


  heroImage.addEventListener(
    "mouseleave",
    () => {

      heroImage.style.transform =
        "rotate(2deg)";

    }
  );

}



/* =====================================================
   SERVICE HOVER
===================================================== */

const serviceItems =
  document.querySelectorAll(
    ".service-item"
  );


serviceItems.forEach(
  (service) => {

    service.addEventListener(
      "mousemove",
      (event) => {

        if (
          window.matchMedia(
            "(pointer: fine)"
          ).matches
        ) {

          const rect =
            service.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left;


          const y =
            event.clientY -
            rect.top;


          service.style.setProperty(
            "--mouse-x",
            `${x}px`
          );


          service.style.setProperty(
            "--mouse-y",
            `${y}px`
          );

        }

      }
    );

  }
);



/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      (event) => {

        const targetId =
          anchor.getAttribute(
            "href"
          );


        if (
          targetId === "#" ||
          !targetId
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (target) {

          event.preventDefault();


          const headerHeight =
            header.offsetHeight;


          const targetPosition =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            headerHeight;


          window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

          });

        }

      }
    );

  });



/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navItems =
  document.querySelectorAll(
    ".nav-link"
  );


function updateActiveNav() {

  const scrollPosition =
    window.scrollY +
    window.innerHeight *
    0.35;


  sections.forEach(
    (section) => {

      const top =
        section.offsetTop;

      const bottom =
        top +
        section.offsetHeight;


      if (
        scrollPosition >= top &&
        scrollPosition < bottom
      ) {

        const id =
          section.getAttribute(
            "id"
          );


        navItems.forEach(
          (item) => {

            item.classList.remove(
              "active"
            );


            if (
              item.getAttribute(
                "href"
              ) === `#${id}`
            ) {

              item.classList.add(
                "active"
              );

            }

          }
        );

      }

    }
  );

}


window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive: true }
);



/* =====================================================
   HERO ORB PARALLAX
===================================================== */

const orbOne =
  document.querySelector(
    ".orb-one"
  );

const orbTwo =
  document.querySelector(
    ".orb-two"
  );


if (
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  window.addEventListener(
    "mousemove",
    (event) => {

      const x =
        event.clientX /
        window.innerWidth -
        0.5;


      const y =
        event.clientY /
        window.innerHeight -
        0.5;


      if (orbOne) {

        orbOne.style.transform =
          `translate(${x * 25}px, ${y * 25}px)`;

      }


      if (orbTwo) {

        orbTwo.style.transform =
          `translate(${x * -18}px, ${y * -18}px)`;

      }

    }
  );

}



/* =====================================================
   IMAGE TILT ON PHOTO STRIP
===================================================== */

const stripImages =
  document.querySelectorAll(
    ".strip-image"
  );


if (
  window.matchMedia(
    "(pointer: fine)"
  ).matches
) {

  stripImages.forEach(
    (image) => {

      image.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            image.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left;


          const y =
            event.clientY -
            rect.top;


          const rotateY =
            ((x / rect.width) - 0.5) * 4;


          const rotateX =
            ((y / rect.height) - 0.5) * -4;


          image.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }
      );


      image.addEventListener(
        "mouseleave",
        () => {

          image.style.transform =
            "perspective(700px) rotateX(0) rotateY(0)";

        }
      );

    }
  );

}



/* =====================================================
   KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      menuButton.classList.remove(
        "active"
      );

      navLinks.classList.remove(
        "active"
      );

      body.classList.remove(
        "menu-open"
      );

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);



/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
  "load",
  () => {

    document
      .querySelectorAll(
        ".hero-description, .hero-buttons"
      )
      .forEach(
        (element) => {

          element.classList.add(
            "visible"
          );

        }
      );

  }
);