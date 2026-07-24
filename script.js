/* =====================================================
KHOBRAGADE COMPUTER SERVICE CENTRE
PREMIUM SCRIPT
VERSION 2.0
===================================================== */

"use strict";

/* ==========================================
PAGE LOADED
========================================== */

window.addEventListener("load", function () {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(function(){

loader.style.display="none";

},500);

}

});

/* ==========================================
SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

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
MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle && navMenu){

menuToggle.addEventListener("click",function(){

navMenu.classList.toggle("active");

});

}

/* ==========================================
ACTIVE MENU
========================================== */

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(function(link){

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});

/* ==========================================
HEADER SHADOW
========================================== */

window.addEventListener("scroll",function(){

const header=document.querySelector(".header");

if(!header) return;

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 2px 20px rgba(0,0,0,.08)";

}

});
/* ==========================================
LIVE SEARCH
========================================== */

const searchInput = document.getElementById("serviceSearch");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(function(card){

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value) ? "" : "none";

});

});

}

/* ==========================================
FAQ TOGGLE
========================================== */

document.querySelectorAll(".faq-item h3").forEach(function(item){

item.addEventListener("click",function(){

const answer=this.nextElementSibling;

if(!answer) return;

answer.style.display=
answer.style.display==="block" ? "none" : "block";

});

});

/* ==========================================
COUNTER ANIMATION
========================================== */

document.querySelectorAll(".counter").forEach(function(counter){

const target=parseInt(counter.dataset.target)||0;

let count=0;

const speed=Math.max(1,Math.ceil(target/100));

function update(){

if(count<target){

count+=speed;

if(count>target) count=target;

counter.innerText=count;

requestAnimationFrame(update);

}

}

update();

});
/* ==========================================
BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",function(){

if(!backToTop) return;

if(window.scrollY>300){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

if(backToTop){

backToTop.addEventListener("click",function(e){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
FLOATING BUTTON ANIMATION
========================================== */

const whatsappBtn=document.querySelector(".whatsapp-float");

if(whatsappBtn){

setInterval(function(){

whatsappBtn.classList.toggle("pulse");

},1000);

}

/* ==========================================
CURRENT YEAR
========================================== */

document.querySelectorAll(".current-year").forEach(function(item){

item.textContent=new Date().getFullYear();

});

/* ==========================================
WEBSITE READY
========================================== */

console.log("✅ Khobragade Computer Service Centre Version 2 Loaded Successfully");
