/* =================================
   ADIX MEHRA PORTFOLIO
   MAIN JAVASCRIPT
================================= */

/* ================================
   MOBILE MENU
================================ */

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");

if (menu && links) {

  menu.addEventListener("click", () => {

    const open = links.classList.toggle("active");

    menu.setAttribute("aria-expanded", open);

    menu.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );

  });


  /* Close menu when a link is clicked */

  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      links.classList.remove("active");

      menu.setAttribute("aria-expanded", "false");

      menu.setAttribute(
        "aria-label",
        "Open menu"
      );

    });

  });

}


/* ================================
   SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

}


/* ================================
   CURRENT YEAR
================================= */

const yearElement = document.querySelector("footer span");

if (yearElement) {

  yearElement.textContent =
    `© ${new Date().getFullYear()} Adix Mehra`;

}


/* ================================
   ESC KEY
   CLOSE MOBILE MENU
================================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape" && menu && links) {

    links.classList.remove("active");

    menu.setAttribute("aria-expanded", "false");

    menu.setAttribute(
      "aria-label",
      "Open menu"
    );

  }

});