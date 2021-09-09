let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => { 
  menuSection.classList.toggle('on', show);
  show = !show;
});

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  menuSection.classList.toggle('on', show);
  show = !show;
}

navLink.forEach(link => {
  link.addEventListener('click', linkAction);
})

