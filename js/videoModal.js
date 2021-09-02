const aboutMeButton = document.getElementById('aboutMeButton');
const modalVideo = document.querySelector('.modalVideo');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-modal');

aboutMeButton.addEventListener('click', displayVideo);

closeButton.addEventListener('click', closeModal);

function displayVideo() {
  modalOverlay.classList.add('active');
  modalVideo.classList.add('active');
}

function closeModal(event) {
  modalOverlay.classList.remove('active');
  modalVideo.classList.remove('active');
}

modalOverlay.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    closeModal();
  }
})