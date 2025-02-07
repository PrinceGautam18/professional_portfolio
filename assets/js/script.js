"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ------------------------auto type text---------------------- */

setTimeout(() => {
  var type = new Typed(".auto-type", {
    strings: ["UI & UX Designer", "Website Developer"],
    typeSpeed: 50,
    backSpeed: 50,
  });
}, 2000);

/* --------------------------form validation */

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const send_btn = document.querySelector("#send_btn");
const message = document.querySelector("#message");
send_btn.disabled = true;
name.addEventListener("keyup", () => {
  if (name.value.length > 0) {
    email.addEventListener("keyup", () => {
      if (email.value.length > 0) {
        message.addEventListener("keyup", () => {
          if (message.value.length > 0) {
            send_btn.disabled = false;
          }
        });
      }
    });
  } else {
    button.disabled = false;
  }
});

/* ----------------------------------------- */

/* --- popup message--- */

const addButtonTrigger = (el) => {
  el.addEventListener("click", () => {
    const popupEl = document.querySelector(`.${el.dataset.for}`);
    popupEl.classList.toggle("popup--visible");
  });
};

Array.from(document.querySelectorAll("button[data-for]")).forEach(
  addButtonTrigger
);

/* ------ */
