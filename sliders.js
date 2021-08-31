let counter = 1;
let time = 6000;


function autoSlider() {
  let imagens = document.querySelectorAll('.imagem');
  document.getElementById('radio' + counter).checked = true;

  let images = document.querySelectorAll('.image');
  document.getElementById('radio' + counter + '-projetos').checked = true;

  counter++;

  if (counter > imagens.length) {
    counter = 1;
  }

  if (counter > images.length) {
    counter = 1;
  }
}

function start() {
  setInterval(() => {
    autoSlider();
  }, time);

}

window.addEventListener('load', start);