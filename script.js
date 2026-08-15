/* =========================================================
   LOADER
========================================================= */

document.body.classList.add("loading");

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");
const loaderNumber = document.getElementById("loaderNumber");

let progress = 0;

const loaderInterval = setInterval(() => {
  progress += Math.floor(Math.random() * 8) + 3;

  if (progress >= 100) {
    progress = 100;
    clearInterval(loaderInterval);

    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.classList.remove("loading");
    }, 500);
  }

  loaderProgress.style.width = `${progress}%`;
  loaderNumber.textContent = progress;
}, 70);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

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
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow = document.getElementById("cursorGlow");

if (window.matchMedia("(pointer: fine)").matches) {

  window.addEventListener("mousemove", (event) => {
    cursorGlow.animate(
      {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`
      },
      {
        duration: 700,
        fill: "forwards"
      }
    );
  });

}


/* =========================================================
   CARD TILT
========================================================= */

const tiltCards = document.querySelectorAll(".tilt-card");

if (window.matchMedia("(pointer: fine)").matches) {

  tiltCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });

  });

}


/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,5,5,.72)";
    navbar.style.backdropFilter = "blur(18px)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
  }

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      event.preventDefault();
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


/* =========================================================
   DYNAMIC YEAR
========================================================= */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {
  element.textContent = new Date().getFullYear();
});