/* =====================================================
   ADIX MEHRA — PORTFOLIO
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

      const open =
        links.classList.toggle("active");

      menu.setAttribute(
        "aria-expanded",
        String(open)
      );

      menu.setAttribute(
        "aria-label",
        open
          ? "Close menu"
          : "Open menu"
      );

      menu.textContent =
        open ? "✕" : "☰";

    });


    /* Close mobile menu after clicking */

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

  }


  /* ===================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  =================================================== */

  document.addEventListener("click", (event) => {

    if (!menu || !links) {
      return;
    }

    const clickedInsideMenu =
      links.contains(event.target);

    const clickedButton =
      menu.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
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


  /* ===================================================
     SMOOTH SCROLL
  =================================================== */

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


  /* ===================================================
     SCROLL REVEAL
  =================================================== */

  const revealElements =
    document.querySelectorAll(
      ".reveal, .card, .stat, .project, .services > div"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -40px 0px"
        }
      );


    revealElements.forEach(
      (element) => {

        if (
          !element.classList.contains(
            "reveal"
          )
        ) {

          element.classList.add(
            "reveal"
          );

        }

        observer.observe(element);

      }
    );

  } else {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* ===================================================
     ACTIVE NAV LINK
  =================================================== */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".nav-links a"
    );


  const updateActiveLink = () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 180;

      if (
        window.scrollY >= sectionTop
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navLinks.forEach((link) => {

      link.classList.remove(
        "active"
      );

      const href =
        link.getAttribute("href");

      if (
        href === "#" + currentSection
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  };


  window.addEventListener(
    "scroll",
    updateActiveLink,
    {
      passive: true
    }
  );

  updateActiveLink();


  /* ===================================================
     IMAGE LOADING EFFECT
  =================================================== */

  const images =
    document.querySelectorAll(
      "img"
    );


  images.forEach((image) => {

    if (image.complete) {

      image.classList.add(
        "loaded"
      );

    } else {

      image.addEventListener(
        "load",
        () => {

          image.classList.add(
            "loaded"
          );

        },
        {
          once: true
        }
      );

    }

  });


  /* ===================================================
     IMAGE ERROR HANDLING
  =================================================== */

  images.forEach((image) => {

    image.addEventListener(
      "error",
      () => {

        console.warn(
          "Image could not be loaded:",
          image.src
        );

      }
    );

  });


  /* ===================================================
     ESCAPE KEY CLOSES MOBILE MENU
  =================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        links &&
        links.classList.contains(
          "active"
        )
      ) {

        links.classList.remove(
          "active"
        );

        if (menu) {

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

    }
  );


  /* ===================================================
     CURRENT YEAR
  =================================================== */

  const footerYear =
    document.querySelector(
      "footer span"
    );


  if (footerYear) {

    footerYear.textContent =
      `© ${new Date().getFullYear()} Adix Mehra`;

  }


  /* ===================================================
     CONSOLE
  =================================================== */

  console.log(
    "ADIX MEHRA Portfolio loaded successfully 🚀"
  );

});