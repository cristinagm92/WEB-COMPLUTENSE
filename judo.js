// judo.js
function mostrarBeneficio() {
  const beneficios = [
    "Mejora el equilibrio y la coordinación.",
    "Aumenta la fuerza y la flexibilidad sin impacto.",
    "Desarrolla disciplina, respeto y autocontrol.",
    "Ayuda a gestionar el estrés y canalizar la energía.",
    "Fomenta la confianza y el espíritu de superación."
  ];
  
  const indice = Math.floor(Math.random() * beneficios.length);
  const texto = beneficios[indice];

  const salida = document.getElementById('beneficio');
  // pequeña animación de aparición
  salida.style.opacity = 0;
  setTimeout(() => {
    salida.textContent = texto;
    salida.style.opacity = 1;
  }, 200);
}

document.getElementById('btn-beneficio').addEventListener('click', mostrarBeneficio);
