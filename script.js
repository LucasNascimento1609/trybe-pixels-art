function colorSelected({ target }) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.toggle('selected');
  target.classList.add('selected');
}

function pixelClick(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor =
    getComputedStyle(selectedColor).backgroundColor;

  /* 
    https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 
  */
}

function clearColors(event) {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorSelected);
}

const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', pixelClick);
}

document.getElementById('clear-board').addEventListener('click', clearColors);
