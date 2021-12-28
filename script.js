function colorClick(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');

  /*
    Não me recordava como adicionar uma classe e ao buscar no google encontrei:
    https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro */
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
  colors[index].addEventListener('click', colorClick);
}

const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', pixelClick);
}

document.getElementById('clear-board').addEventListener('click', clearColors);
