// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu img"); // tu icono menú
  const contacto = document.getElementById("contacto");

  menuBtn.addEventListener("click", () => {
    contacto.classList.toggle("active"); // alterna la visibilidad
  });
});
