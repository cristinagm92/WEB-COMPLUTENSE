const mantras = [
  "Om Shanti Shanti Shanti — Paz en cuerpo, mente y alma.",
  "Lokah Samastah Sukhino Bhavantu — Que todos los seres sean felices y libres.",
  "So Hum — Yo soy eso, soy parte del todo.",
  "Om Namah Shivaya — Honro la divinidad que habita en mí.",
  "Om Mani Padme Hum — La joya está en el loto: la sabiduría en el corazón.",
  "Sat Nam — Mi verdad es mi identidad."
];

const btn = document.getElementById('mantraBtn');
const text = document.getElementById('mantraText');

btn.addEventListener('click', () => {
  const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];

  // animación de salida
  text.style.opacity = 0;

  setTimeout(() => {
    text.textContent = randomMantra;
    text.style.opacity = 1;
  }, 300);
});
