document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PRELOADER
  ========================= */

  const loader = document.getElementById("loader");
  const loaderPercent = document.getElementById("loaderPercent");

  let progress = 0;

  const loading = setInterval(() => {

    progress += 5;

    if (progress >= 100) {
      progress = 100;
      clearInterval(loading);

      if (loaderPercent) {
        loaderPercent.textContent = "100";
      }

      setTimeout(() => {
        if (loader) {
          loader.classList.add("loaded");
        }
      }, 300);

    } else {

      if (loaderPercent) {
        loaderPercent.textContent = progress;
      }

    }

  }, 50);



  /* =========================
     HEADER
  ========================= */

  const header = document.getElementById("header");

  function checkHeader() {

    if (!header) return;

    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", checkHeader);
  checkHeader();



  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton =
    document.getElementById("menuButton");

  const navLinks =
    document.getElementById("navLinks");


  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      menuButton.classList.toggle("active");
      navLinks.classList.toggle("active");

      const open =
        navLinks.classList.contains("active");

      menuButton.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    });


    document
      .querySelectorAll(".nav-link")
      .forEach((link) => {

        link.addEventListener("click", () => {

          menuButton.classList.remove("active");
          navLinks.classList.remove("active");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        });

      });

  }



  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
    );


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const delay =
              entry.target.dataset.delay || 0;

            setTimeout(() => {

              entry.target.classList.add("visible");

            }, Number(delay));

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.1
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });



  /* =========================
     SMOOTH SCROLL
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const id =
          link.getAttribute("href");

        if (!id || id === "#") return;

        const target =
          document.querySelector(id);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
          header ? header.offsetHeight : 0;

        const position =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({
          top: position,
          behavior: "smooth"
        });

      });

    });



  /* =========================
     MAGNETIC BUTTONS
  ========================= */

  if (
    window.matchMedia("(pointer: fine)").matches
  ) {

    document
      .querySelectorAll(".magnetic")
      .forEach((element) => {

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

      });

  }



  /* =========================
     CURSOR
  ========================= */

  const cursor =
    document.getElementById("cursor");

  const cursorRing =
    document.getElementById("cursorRing");


  if (
    cursor &&
    cursorRing &&
    window.matchMedia("(pointer: fine)").matches
  ) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;


    document.addEventListener(
      "mousemove",
      (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

      }
    );


    function moveCursor() {

      cursor.style.left =
        mouseX + "px";

      cursor.style.top =
        mouseY + "px";


      ringX +=
        (mouseX - ringX) * 0.15;

      ringY +=
        (mouseY - ringY) * 0.15;


      cursorRing.style.left =
        ringX + "px";

      cursorRing.style.top =
        ringY + "px";


      requestAnimationFrame(moveCursor);

    }


    moveCursor();


    document
      .querySelectorAll(
        "a, button, .service-item, .skill-box"
      )
      .forEach((element) => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursor.classList.add("active");
            cursorRing.classList.add("active");

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursor.classList.remove("active");
            cursorRing.classList.remove("active");

          }
        );

      });

  }



  /* =========================
     HERO IMAGE EFFECT
  ========================= */

  const heroImage =
    document.getElementById("heroImage");


  if (
    heroImage &&
    window.matchMedia("(pointer: fine)").matches
  ) {

    heroImage.addEventListener(
      "mousemove",
      (event) => {

        const rect =
          heroImage.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
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

});