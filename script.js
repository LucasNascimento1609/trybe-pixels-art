const colors = document.getElementsByClassName('color');

function colorClick(event) {
  let deleteSelected = document.getElementsByClassName('selected');
  deleteSelected[0].classList.toggle('selected');
  event.target.classList.add('selected');

  /*
    Não me recordava como adicionar uma classe e ao buscar no google encontrei:
    https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro */
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorClick);
}
