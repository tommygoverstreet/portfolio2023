// Autor: Tommy Overstreet
// Date:  2023-08-03 17:37:00

//VARIABLES
const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const nav = document.querySelector("#nav");

//FUNCTIONS
const openNav = () => {
nav.classList.toggle("hide");
 navOpen.classList.toggle("hide");
 navClose.classList.toggle("hide");
}

const closeNav = () => {
 nav.classList.toggle("hide");
 navClose.classList.toggle("hide");
 navOpen.classList.toggle("hide");
}

//EVENTS

