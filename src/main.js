import "./style.css";

// Selecciona elementos del DOM.
const boton = document.getElementById("menu-button");
const menu = document.getElementById("drop-down-menu");
const icono = document.getElementById("menu-icon");

let menuAbierto = false;

boton.addEventListener("click", () => {
  menuAbierto = !menuAbierto;

  // Muestra u oculta el menú.
  menu.classList.toggle("hidden", !menuAbierto);

  // Bloquea el desplazamiento de la página.
  document.body.classList.toggle("overflow-hidden", menuAbierto);

  // Actualiza el atributo ARIA para accesibilidad.
  boton.setAttribute("aria-expanded", menuAbierto);

  // Actualiza el ícono del menú.
  if (menuAbierto) {
    icono.src = "./src/assets/img/icon-close.svg";
    icono.alt = "Close menu";
  } else {
    icono.src = "./src/assets/img/icon-hamburger.svg";
    icono.alt = "Open menu";
  }
});
