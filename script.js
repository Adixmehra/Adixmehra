l/* ==================================================
   ADIX MEHRA PORTFOLIO
   Main JavaScript
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     LOADING SCREEN
  ================================================== */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {

    setTimeout(() => {

      if (loader) {
        loader.classList.add("hide");
      }

    }, 700);

  });


  /* ==================================================
     MOBILE MENU
  ================================================== */

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
        isOpen ? "×" : "☰";

    });


    /* Close menu after clicking link */

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

    document.addEventListener("click", (event) => {

      const clickedInsideMenu =
        menu.contains(event.target);

      const clickedInsideLinks =
        links.contains(event.target);

      if (
        !clickedInsideMenu &&
        !clickedInsideLinks &&
        links.classList.contains("active")
      ) {

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


  /* ==================================================
     REVEAL ON SCROLL
  ================================================== */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observerInstance.unobserve(
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


  /* ==================================================
     CURRENT YEAR
  ================================================== */

  const yearElement =
    document.querySelector("footer span");

  if (yearElement) {

    yearElement.textContent =
      `© ${new Date().getFullYear()} Adix Mehra`;

  }


  /* ==================================================
     SMOOTH INTERNAL LINKS
  ================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId =
          link.getAttribute("href");

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

});