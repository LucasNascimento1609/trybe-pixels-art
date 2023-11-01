function handleColorSelect({ target }) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.toggle('selected');
  target.classList.add('selected');
}

function colorPixel(event) {
  const selectedBackground = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const { target } = event;
  const currentPixelColor = getComputedStyle(target).backgroundColor;

  if (currentPixelColor === selectedBackground) {
    target.style.backgroundColor = 'white';
  } else {
    target.style.backgroundColor = selectedBackground;
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function validateBoard(boardSize) {
  if (boardSize < 5) return 5;
  if (boardSize > 50) return 50;
  if (Number.isNaN(boardSize)) return false;
  return boardSize;
}

function resetPixelBoard(boardSize) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  pixelBoard.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
}

function generateBoard() {
  const boardSize = parseInt(document.getElementById('board-size').value, 10);

  const validBoard = validateBoard(boardSize);
  if (!validBoard) return alert('Board inválido!');
  resetPixelBoard(validBoard);

  for (let i = 0; i < validBoard; i += 1) {
    for (let j = 0; j < validBoard; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'white';
      pixel.addEventListener('click', colorPixel);
      document.getElementById('pixel-board').appendChild(pixel);
    }
  }
}

function handleEnterKey(event) {
  if (event.key === 'Enter') generateBoard();
}

function generateColorPalette() {
  const red = Math.floor(Math.random() * 237);
  const green = Math.floor(Math.random() * 237);
  const blue = Math.floor(Math.random() * 237);

  return `${red}, ${green}, ${blue}`;
}

const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorSelected);
}

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', colorPixel);
}

document.getElementById('clear-board').addEventListener('click', clearBoard);
document.getElementById('generate-board').addEventListener('click', generateBoard);
document.getElementById('board-size').addEventListener('keydown', handleEnterKey);
document.querySelector('.red').style.backgroundColor = `rgb(${generateColorPalette()})`;
document.querySelector('.green').style.backgroundColor = `rgb(${generateColorPalette()})`;
document.querySelector('.blue').style.backgroundColor = `rgb(${generateColorPalette()})`;