/* ==========================================
Khobragade Computer Service Centre
Version 2.0
script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Loader
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        if(loader){
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            },500);
        }
    });

    /* ==========================
       Back To Top
    ========================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if(backToTop){

            if(window.scrollY > 400){
                backToTop.style.display = "flex";
            }else{
                backToTop.style.display = "none";
            }

        }

    });

    if(backToTop){

        backToTop.addEventListener("click",(e)=>{

            e.preventDefault();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================
       Service Search
    ========================== */

    const search = document.getElementById("serviceSearch");

    if(search){

        search.addEventListener("keyup",function(){

            const value=this.value.toLowerCase();

            document.querySelectorAll(".service-box").forEach(card=>{

                card.style.display=

                card.innerText.toLowerCase().includes(value)

                ?"block":"none";

            });

        });

    }

});
/* ==========================================
COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = counter.innerText.replace(/\D/g,"");

if(target){

let count = 0;

const speed = Math.ceil(target / 80);

const updateCounter = ()=>{

count += speed;

if(count >= target){

counter.innerText = counter.innerText.replace(/\d+/,target);

}else{

counter.innerText = counter.innerText.replace(/\d+/,count);

requestAnimationFrame(updateCounter);

}

};

updateCounter();

}

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>counterObserver.observe(counter));

/* ==========================================
STICKY HEADER SHADOW
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(header){

if(window.scrollY > 50){

header.style.boxShadow="0 12px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 4px 20px rgba(0,0,0,.08)";

}

}

});

/* ==========================================
FAQ TOGGLE
========================================== */

document.querySelectorAll(".faq-item h3").forEach(item=>{

item.style.cursor="pointer";

item.addEventListener("click",()=>{

const answer=item.nextElementSibling;

if(answer){

answer.style.display=

answer.style.display==="none"?"block":"none";

}

});

});

document.querySelectorAll(".faq-item p").forEach(item=>{

item.style.display="none";

});

/* ==========================================
SCROLL ANIMATION
========================================== */

const animateItems=document.querySelectorAll(

".service-box,.category-card,.update-card,.why-card,.testimonial-card,.stat-box"

);

const animationObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

animateItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".7s";

animationObserver.observe(item);

});
/* ==========================================
MOBILE MENU
========================================== */

const mobileMenu=document.querySelector(".mobile-menu");
const nav=document.querySelector("nav");

if(mobileMenu && nav){

mobileMenu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/* ==========================================
ACTIVE MENU
========================================== */

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage || (currentPage==="" && href==="index.html")){

link.classList.add("active");

}

});

/* ==========================================
NEWSLETTER FORM
========================================== */

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input");

const value=email.value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(pattern.test(value)){

alert("Thank you for subscribing!");

newsletter.reset();

}else{

alert("Please enter a valid email address.");

}

});

}

/* ==========================================
LAZY IMAGE EFFECT
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});

/* ==========================================
COPYRIGHT YEAR
========================================== */

document.querySelectorAll(".current-year").forEach(el=>{

el.textContent=new Date().getFullYear();

});

/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log("Khobragade Computer Service Centre Version 2.0 Loaded Successfully");

/* ==========================================
END OF SCRIPT.JS
========================================== */
