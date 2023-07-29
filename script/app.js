// Assign Symbols to Query Selectors// Assign Symbols to Query Selectors
const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const toggleMenu = () => {
  $("#mobileNav").classList.toggle("hide");
  $("#navIcon1").classList.toggle("hide");
  $("#navIcon2").classList.toggle("hide");
};

var acc = $$(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "grid") {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }
  });
}
