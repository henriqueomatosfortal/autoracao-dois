/*

// Obtemos o elemento do slider
const xSlider = document.getElementById('xSlider');

const ySlider = document.getElementById('ySlider');

// Obtemos o círculo que representa o ponto no gráfico
const dataPoint = document.getElementById('dataPoint');

// Definimos limites do eixo X no SVG (em pixels)
const xMinPixel = 40;  // Onde o eixo X começa no SVG
const xMaxPixel = 480; // Onde o eixo X termina no SVG

const yMinPixel = 20;
const yMaxPixel = 250;

// Precisamos converter o valor do slider (0 a 100) em coordenadas do SVG.
function updatePointPosition(xValue, yValue) {
  // 'value' vai de 0 a 100
  // Vamos converter para a faixa [xMinPixel, xMaxPixel]

  const rangeSlider = 100; // Tamanho máximo do slider
  const pixelRange = xMaxPixel - xMinPixel; // Distância em pixels do eixo
  const pixelRangeY = yMaxPixel - yMinPixel;

  // Regra de 3: valor % slider -> pixel no SVG
  const newX = xMinPixel + (xValue / rangeSlider) * pixelRangeX;
  const newY = yMaxPixel + (yValue / rangeSlider) * pixelRangeY;

  // Movemos o ponto para esse X (mantendo Y = 250 - a "origem" que definimos)
  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);

  // Se quiser, podemos também manipular Y baseado em alguma função, ex. y = f(x)
  // dataPoint.setAttribute('cy', 250 - algumaFuncao(newX));

  function calculateY(xValue){
    const xNormalized = xValue /100;
    return xNormalized * xNormalized;
  }

  function updatePointPosition(xValue, yValue){
    const rangeSlider = 100;
    const pixalRangerX = xMaxPixel - xMinPixel; 
    const newX = xMinPixel + (xValue / rangeSlider) * pixelRangeX;
}

  const yNormalized = calculateY(xValue);
  const pixelRangeY = yMaxPixel - yMinPixel;
  const newY = yMaxPixel - yNormalized * pixelRangeY;

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);

}

// Quando carregamos a página, atualizamos a posição inicial
updatePointPosition(xSlider.value, ySlider.value);

// Escutamos mudanças no slider
xSlider.addEventListener('input', (event) => {
  const valorAtual = event.target.value;
  updatePointPosition(valorAtual, ySlider.value);
});

  ySlider.addEventListener('input', (event) => {
    const valorAtual = event.target.value;
    updatePointPosition(xSlider.value, event.target.value);
});

*/

const xSlider = document.getElementById('xSlider');
const ySlider = document.getElementById('ySlider');
const dataPoint = document.getElementById('dataPoint');

const xMinPixel = 40;
const xMaxPixel = 480;
const yMinPixel = 20;
const yMaxPixel = 250;

function updatePointPosition(xValue, yValue) {
  const rangeSlider = 100;
  const pixelRangeX = xMaxPixel - xMinPixel;
  const pixelRangeY = yMaxPixel - yMinPixel;

  const newX = xMinPixel + (xValue / rangeSlider) * pixelRangeX;
  const newY = yMaxPixel - (yValue / rangeSlider) * pixelRangeY;

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

updatePointPosition(xSlider.value, ySlider.value);

xSlider.addEventListener('input', (event) => {
  updatePointPosition(event.target.value, ySlider.value);
});

ySlider.addEventListener('input', (event) => {
  updatePointPosition(xSlider.value, event.target.value);
});