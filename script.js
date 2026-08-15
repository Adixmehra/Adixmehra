/* =====================================================
   ADIX MEHRA PORTFOLIO
   JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     MOBILE MENU
  =================================================== */

  const menu = document.querySelector(".menu");
  const links = document.querySelector(".nav-links");

  if (menu && links) {

    menu.addEventListener("click", () => {

      const isOpen =
        links.classList.toggle("active");

      menu.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menu.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );

      menu.textContent =
        isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

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


    /* Close menu when clicking outside */

    document.addEventListener(
      "click",
      (event) => {

        const clickedInsideMenu =
          menu.contains(event.target) ||
          links.contains(event.target);

        if (!clickedInsideMenu) {

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

      }
    );

  }


  /* ===================================================
     SCROLL REVEAL
  =================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              obs.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    /* Fallback for old browsers */

    revealElements.forEach((element) => {

      element.classList.add("visible");

    });

  }


  /* ===================================================
     SMOOTH SCROLL
  =================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

      anchor.addEventListener(
        "click",
        (event) => {

          const targetId =
            anchor.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(
              targetId
            );

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* ===================================================
     ESC KEY — CLOSE MOBILE MENU
  =================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

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

    }
  );


  /* ===================================================
     IMAGE ERROR HANDLING
  =================================================== */

  document
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "image-error"
          );

          console.warn(
            "Image could not be loaded:",
            image.src
          );

        }
      );

    });

});