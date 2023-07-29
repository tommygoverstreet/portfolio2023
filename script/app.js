// Assign Symbols to Query Selectors
const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const toggleMenu = () => {
  $("#mobileNav").classList.toggle("hide");
  $("#navIcon1").classList.toggle("hide");
  $("#navIcon2").classList.toggle("hide");
};
    
