const beneficios = [
  "Fortalece el abdomen y la zona lumbar para una espalda sana.",
  "Mejora la postura y alivia el dolor de espalda.",
  "Aumenta la flexibilidad y el control corporal.",
  "Tonifica sin impacto y sin sobrecargar las articulaciones.",
  "Fortalece el suelo pélvico y mejora la estabilidad.",
  "Favorece la respiración y la concentración.",
  "Reeduca el movimiento para prevenir lesiones."
];

const btn = document.getElementById('beneficioBtn');
const text = document.getElementById('beneficioText');

btn.addEventListener('click', () => {
  const randomBeneficio = beneficios[Math.floor(Math.random() * beneficios.length)];
  text.style.opacity = 0;
  setTimeout(() => {
    text.textContent = randomBeneficio;
    text.style.opacity = 1;
  }, 300);
});
