const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.galeria .galeria-imagens .container-img img');
const original = document.querySelector('.large-image');
const caption = document.querySelector('.caption');
const btnAboutMe = document.getElementById('aboutMeButton');

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    abrirModal();

    const originalSrc = preview.getAttribute('data-original');
    const originalSrcSmallScreen = preview.getAttribute('data-small-screen');

    const windowScreenSize = window.screen.width;

    if (windowScreenSize <= 478) {
      original.src = `./assets/images/${originalSrcSmallScreen}`;

    } else {
      original.src = `./assets/images/${originalSrc}`;
    }
    const altText = preview.alt;
    caption.textContent = altText;

  })
});


btnAboutMe.addEventListener('click', () => {

})


modal.addEventListener('click', fecharModal);


function abrirModal() {
  modal.classList.add('open');
  original.classList.add('open');
}


function fecharModal(event) {
  if (event.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
}