const menuIcon = document.querySelector('#menu-icon');
const navbarMenu = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.sticky-header');
  const navbar = document.querySelector('.navbar');
  const offset = window.scrollY;

  if (offset > 0) {
    header.classList.add('sticky');
    navbar.classList.add('navbar-colored');
  } else {
    header.classList.remove('sticky');
    navbar.classList.remove('navbar-colored');
  }
});
