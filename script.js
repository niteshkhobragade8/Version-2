/* =====================================================
   KHOBRAGADE COMPUTER SERVICE CENTRE
   FINAL PREMIUM JAVASCRIPT
   VERSION 1.0
===================================================== */

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuBtn && navMenu){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
   ACTIVE MENU
========================================== */

const currentPage=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});
/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.querySelector(".dark-mode");

if (darkBtn) {

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

localStorage.setItem("theme",
document.body.classList.contains("dark")
? "dark"
: "light");

});

}

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark");

}

/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

if (!topBtn) return;

if (window.scrollY > 300) {

topBtn.style.display = "flex";

} else {

topBtn.style.display = "none";

}

});

if (topBtn) {

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

}

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

button.addEventListener("click", function () {

this.classList.add("clicked");

setTimeout(() => {

this.classList.remove("clicked");

}, 300);

});

});

/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

if (loader) {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 500);

}

});
/* ==========================================
   LIVE SEARCH
========================================== */

const searchInput = document.querySelector(".search-input");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card => {

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

}

/* ==========================================
   FAQ TOGGLE
========================================== */

document.querySelectorAll(".faq-item h3").forEach(item => {

item.addEventListener("click", () => {

const answer = item.nextElementSibling;

if (!answer) return;

answer.style.display =
answer.style.display === "block" ? "none" : "block";

});

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

document.querySelectorAll(".counter").forEach(counter => {

const target = Number(counter.dataset.target) || 0;

let count = 0;

const speed = Math.max(1, Math.ceil(target / 100));

const update = () => {

if (count < target) {

count += speed;

if (count > target) count = target;

counter.innerText = count;

requestAnimationFrame(update);

}

};

update();

});

/* ==========================================
   WHATSAPP FLOATING BUTTON
========================================== */

const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {

setInterval(() => {

whatsapp.classList.toggle("pulse");

}, 1000);

}

/* ==========================================
   CURRENT YEAR
========================================== */

document.querySelectorAll(".current-year").forEach(year => {

year.textContent = new Date().getFullYear();

});

console.log("Khobragade Computer Service Centre Website Loaded Successfully");
