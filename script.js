function colorSelected({ target }) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.toggle('selected');
  target.classList.add('selected');
}

function colorPixel(event) {
  const selectedBackgroundColor = document.querySelector('.selected').backgroundColor;
  const { target } = event;
  const currentPixelColor = getComputedStyle(target).backgroundColor;
  
  if (currentPixelColor === selectedBackgroundColor) {
    target.style.backgroundColor = 'white';
  } else {
    target.style.backgroundColor = selectedBackgroundColor;
  }
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
  pixels[index].addEventListener('click', colorPixel);
}

document.getElementById('clear-board').addEventListener('click', clearColors);
