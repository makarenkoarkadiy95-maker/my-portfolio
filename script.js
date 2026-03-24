const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 20) {
    header.style.background = "rgba(4, 4, 4, 0.86)";
  } else {
    header.style.background = "rgba(4, 4, 4, 0.64)";
  }
});

const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("hide");
    }
  }, 1000);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}

const typingElement = document.getElementById("typingText");

const typingLines = [
  "C R A F T I N G",
  "M O D E R N",
  "D I G I T A L",
  "E X P E R I E N C E S"
];

let lineIndex = 0;
let charIndex = 0;
let currentText = "";

function typeLine() {
  if (!typingElement) return;

  if (lineIndex < typingLines.length) {
    if (charIndex < typingLines[lineIndex].length) {
      currentText += typingLines[lineIndex].charAt(charIndex);
      typingElement.innerHTML = currentText.replace(/\n/g, "<br>");
      charIndex++;
      setTimeout(typeLine, 38);
    } else {
      currentText += "\n";
      typingElement.innerHTML = currentText.replace(/\n/g, "<br>");
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 220);
    }
  }
}

window.addEventListener("load", () => {
  setTimeout(typeLine, 420);
});