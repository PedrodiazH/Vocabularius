// Salto de linea  -  \r\nEjemplo de uso:",

const data = [
  {
    palabra: "INEXORABLE",
    definicion: "Que no se puede evitar, eludir o detener.",
    numero: "1",
    uso: "El inexorable paso del tiempo.",
  },
  {
    palabra: "AUTOPIESISNOMBREMUYLARGO",
    definicion: "Concepto asociado a que todo ser vivo se encuentra dentro de un sistema cerrado que constantemente está creciendo y creándose a si mismo. Es propuesto por el científico chileno Humberto Maturana.",
    numero: "2",
    uso: "Un bonito recuerdo es inmarcesible.",
  },
  {
    palabra: "INMARCESIBLE",
    definicion: "Que no se puede marchitar, inmarchitable.\r\nEjemplo de uso: Un bonito recuerdo es inmarcesible.",
    numero: "3",
    uso: "Un bonito recuerdo es inmarcesible.",
  },
];

function getDiaOfYear() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay + 1);

  return dayOfYear;
}

// Ponemos en una variable lo que salga de la funcion
const dayOfYear = getDiaOfYear();

// Ponemos en constantes la palabra y su definicion
const restaDia = dayOfYear - 170;
const palabraData = data[restaDia].palabra;
const definicionData = data[restaDia].definicion;
const usoData = data[restaDia].uso;

// Actualizar el contenido del elemento HTML
const palabraElement = document.getElementById("palabra");
const defElement = document.getElementById("definicion");
const usoElement = document.getElementById("uso");
palabraElement.textContent = "" + palabraData;
defElement.textContent = "" + definicionData;
usoElement.textContent = "Ejemplo de uso: " + usoData;
