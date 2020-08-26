let menu = document.querySelector(".hamburguer-menu");
let nav = document.querySelector(".mobile-nav");

menu.addEventListener("click", openMenu);

function openMenu() {
  nav.classList.toggle("open");
}
