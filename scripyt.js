"use strict";

window.addEventListener("scroll", function () {
    const header = document.querySelector(".fixed-header");
    const mainHeader = document.querySelector(".main-header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
