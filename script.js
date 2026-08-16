/* =====================================================
   ADIX MEHRA PORTFOLIO
   Professional Scroll Animation
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     MOBILE MENU
  =================================================== */

  const menu = document.querySelector(".menu");
  const links = document.querySelector(".nav-links");

  if (menu && links) {

    menu.addEventListener("click", () => {

      const isOpen = links.classList.toggle("active");

      menu.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menu.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menu.textContent = isOpen ? "✕" : "☰";

    });


    document
      .querySelectorAll(".nav-links a")
      .forEach((link) => {

        link.addEventListener("click", () => {

          links.classList.remove("active");

          menu.setAttribute(
            "aria-expanded",
            "false"
          );

          menu.setAttribute(
            "aria-label",
            "Open menu"
          );

          menu.textContent = "☰";

        });

      });


    document.addEventListener("click", (event) => {

      const clickedInside =
        menu.contains(event.target) ||
        links.contains(event.target);

      if (!clickedInside) {

        links.classList.remove("active");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

        menu.setAttribute(
          "aria-label",
          "Open menu"
        );

        menu.textContent = "☰";

      }

    });

  }


  /* ===================================================
     PROFESSIONAL SCROLL REVEAL
  =================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              obs.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -8% 0px"
        }
      );


    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* ===================================================
     SMOOTH ANCHOR SCROLL
  =================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

      anchor.addEventListener("click", (event) => {

        const targetId =
          anchor.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* ===================================================
     ESC KEY
  =================================================== */

  document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
      return;
    }

    if (!menu || !links) {
      return;
    }

    links.classList.remove("active");

    menu.setAttribute(
      "aria-expanded",
      "false"
    );

    menu.setAttribute(
      "aria-label",
      "Open menu"
    );

    menu.textContent = "☰";

  });


  /* ===================================================
     IMAGE ERROR HANDLING
  =================================================== */

  document
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener("error", () => {

        image.classList.add("image-error");

        console.warn(
          "Image could not be loaded:",
          image.src
        );

      });

    });

});