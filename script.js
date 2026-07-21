/* =====================================================
   Khobragade Computer Service Centre
   Version 2 - script.js
   Part A
===================================================== */

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// Close menu after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// Sticky Header Shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
/* =====================================================
   Part B - Final
===================================================== */

// Active Menu Highlight
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (current && link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Reveal Animation
const revealElements = document.querySelectorAll(
  ".service-card,.feature-card,.why-card,.contact-card,.counter-box"
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.9;

  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

console.log("Khobragade Computer Service Centre V2 Loaded Successfully");
