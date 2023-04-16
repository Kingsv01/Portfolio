const reactCard = document.querySelector('.reactCard'), reactPercent = document.querySelector('.reactPercent');
const htmlCard = document.querySelector('.htmlCard'), htmlPercent = document.querySelector('.htmlPercent');
const cssCard = document.querySelector('.cssCard'), cssPercent = document.querySelector('.cssPercent');
const jsCard = document.querySelector('.jsCard'), jsPercent = document.querySelector('.jsPercent');

reactStartValue = 0, reactEndValue= 95;
htmlStartValue = 0, htmlEndValue= 90;
cssStartValue = 0, cssEndValue= 85;
jsStartValue = 0, jsEndValue= 80;

let circleSpeed = 10;

let htmlInterval = setInterval(() => {
  htmlStartValue++;
  htmlCard.style = `background: conic-gradient(var(--main_color) ${htmlStartValue * 3.6}deg, var(--white_color) 0%);`
  htmlPercent.innerHTML = `${htmlStartValue}%`;

  if(htmlStartValue == htmlEndValue) {
    clearInterval(htmlInterval)
  }
}, circleSpeed)

let cssInterval = setInterval(() => {
  cssStartValue++;
  cssCard.style = `background: conic-gradient(var(--main_color) ${cssStartValue * 3.6}deg, var(--white_color) 0%);`
  cssPercent.innerHTML = `${cssStartValue}%`;

  if(cssStartValue == cssEndValue) {
    clearInterval(cssInterval)
  }
}, circleSpeed)

let jsInterval = setInterval(() => {
  jsStartValue++;
  jsCard.style = `background: conic-gradient(var(--main_color) ${jsStartValue * 3.6}deg, var(--white_color) 0%);`
  jsPercent.innerHTML = `${jsStartValue}%`;

  if(jsStartValue == jsEndValue) {
    clearInterval(jsInterval)
  }
}, circleSpeed)

let reactInterval = setInterval(() => {
  reactStartValue++;
  reactCard.style = `background: conic-gradient(var(--main_color) ${reactStartValue * 3.6}deg, var(--white_color) 0%);`
  reactPercent.innerHTML = `${reactStartValue}%`;

  if(reactStartValue == reactEndValue) {
    clearInterval(reactInterval)
  }
}, circleSpeed)